/// <reference types="https://deno.land/x/supabase_deno@0.0.5/mod.ts" />
/// <reference lib="deno.ns" />

import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

interface GenerateRequest {
  numCodes?: number;
  codeLength?: number;
}

interface Code {
  id: string;
  code: string;
  created_at: string;
  first_used_at: string | null;
  email: string | null;
}

interface SuccessResponse {
  success: true;
  codes: Code[];
}

interface ErrorResponse {
  success: false;
  error: string;
}

const generateCode = (length: number) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

serve(async (req) => {
  try {
    const { numCodes = 10, codeLength = 4 } = await req.json();
    // Temporary debug logging
    console.log("Environment variables:", Deno.env.toObject());

    // Use environment variables with fallback to project values
    const supabaseUrl =
      Deno.env.get("SUPABASE_URL") ||
      "https://wnodqskgwavruorxatcn.supabase.co";
    const serviceRoleKey =
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indub2Rxc2tnd2F2cnVvcnhhdGNuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0ODM2OTAyMiwiZXhwIjoxOTYzOTQ1MDIyfQ.5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X";

    let supabase;
    try {
      supabase = createClient(supabaseUrl, serviceRoleKey);
      // Test connection with a simple query
      const { error } = await supabase
        .from("access_codes")
        .select("*")
        .limit(1);

      if (error) throw error;

      console.log("Supabase client initialized successfully");
    } catch (err) {
      console.error("Supabase initialization error:", err);
      throw new Error(`Failed to initialize Supabase client: ${err.message}`);
    }

    const codes = Array.from({ length: numCodes }, () =>
      generateCode(codeLength)
    );

    const { data, error } = await supabase
      .from("access_codes")
      .insert(
        codes.map((code) => ({
          code,
          created_at: new Date().toISOString(),
          first_used_at: null,
          email: null,
        }))
      )
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, codes: data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
});
