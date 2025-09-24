import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("VITE_RESEND_API_KEY");
const TO_EMAILS = [
  "claudio@projectsanctuary.club",
  "subhi@projectsanctuary.club",
];

// Create Supabase client for updating the database
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country: string;
  message: string;
  messageId?: string; // Added to update processed_at timestamp
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Validate request method
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Parse and validate request body
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      message,
      messageId,
    }: ContactFormData = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate messageId if provided
    if (!messageId) {
      console.warn("No messageId provided - processed_at will not be updated");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; }
          .value { color: #333; }
          .message { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>You have received a new message from the PAN Sanctuary website.</p>
          </div>
          
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${firstName} ${lastName}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
          
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${phone || "Not provided"}</span>
          </div>
          
          <div class="field">
            <span class="label">Country:</span>
            <span class="value">${country}</span>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="message">${message.replace(/\n/g, "<br>")}</div>
          </div>
          
          <div class="field">
            <span class="label">Submitted:</span>
            <span class="value">${new Date().toLocaleString()}</span>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "PAN Sanctuary <noreply@projectsanctuary.club>",
        to: TO_EMAILS,
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${resendResponse.status}`);
    }

    const resendResult = await resendResponse.json();

    // Update processed_at timestamp if messageId is provided
    if (messageId) {
      try {
        const { error: updateError } = await supabase
          .from("contact_messages")
          .update({ processed_at: new Date().toISOString() })
          .eq("id", messageId);

        if (updateError) {
          console.error("Error updating processed_at:", updateError);
          // Don't throw error here - email was sent successfully
        } else {
          console.log(
            "Successfully updated processed_at for message:",
            messageId
          );
        }
      } catch (updateError) {
        console.error("Exception updating processed_at:", updateError);
        // Continue with success response - email was sent
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        emailId: resendResult.id,
        messageProcessed: !!messageId,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
