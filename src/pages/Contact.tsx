import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";
import Notification from "../components/shared/Notification";

// Simple country selector options
const countryOptions = [
  { code: "us", name: "United States", dialCode: "+1" },
  { code: "ar", name: "Argentina", dialCode: "+54" },
  { code: "es", name: "Spain", dialCode: "+34" },
  { code: "mx", name: "Mexico", dialCode: "+52" },
  { code: "br", name: "Brazil", dialCode: "+55" },
  { code: "fr", name: "France", dialCode: "+33" },
  { code: "de", name: "Germany", dialCode: "+49" },
  { code: "it", name: "Italy", dialCode: "+39" },
  { code: "uk", name: "United Kingdom", dialCode: "+44" },
  { code: "au", name: "Australia", dialCode: "+61" },
  { code: "ca", name: "Canada", dialCode: "+1" },
  { code: "cl", name: "Chile", dialCode: "+56" },
  { code: "co", name: "Colombia", dialCode: "+57" },
  { code: "pe", name: "Peru", dialCode: "+51" },
  { code: "uy", name: "Uruguay", dialCode: "+598" },
];

export default function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("us");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const formValues = {
        firstName: formData.get("first-name") as string,
        lastName: formData.get("last-name") as string,
        email: formData.get("email") as string,
        phone: phoneValue, // Use the state value instead of formData
        country: selectedCountry, // Use the state value instead of formData
        message: formData.get("message") as string,
      };

      // First, save to Supabase database and get the message ID
      const { data: insertData, error: dbError } = await supabase
        .from("contact_messages")
        .insert({
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          email: formValues.email,
          phone: formValues.phone || null,
          country: formValues.country,
          message: formValues.message,
        })
        .select("id")
        .single();

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      if (!insertData?.id) {
        throw new Error("Failed to get message ID after insertion");
      }

      // Then, send email via Edge Function with message ID
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            ...formValues,
            messageId: insertData.id, // Pass the message ID to update processed_at
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      setSubmitStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
      setIsAgreed(false);
      setPhoneValue("");
      setSelectedCountry("us");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl font-cinzel">
          Contact Us
        </h2>
        <p className="mt-2 text-lg/8 text-gray-300 font-quattrocento">
          Get in touch with us for any questions about the retreat.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-white"
            >
              First name <span className="text-red-400">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Last name <span className="text-red-400">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-white"
            >
              Phone number{" "}
              <span className="text-gray-500 text-sm font-normal">
                (optional)
              </span>
            </label>
            <div className="mt-2.5 flex gap-2">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-32 rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              >
                {countryOptions.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.dialCode} {country.name}
                  </option>
                ))}
              </select>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                placeholder="Phone number"
                value={phoneValue.replace(/^\+\d+\s?/, "")}
                onChange={(e) => {
                  const selectedCountryObj = countryOptions.find(
                    (c) => c.code === selectedCountry
                  );
                  const dialCode = selectedCountryObj?.dialCode || "";
                  const phoneNumber = e.target.value;
                  setPhoneValue(
                    phoneNumber ? `${dialCode} ${phoneNumber}` : ""
                  );
                }}
                className="flex-1 rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-yellow-500 transition-colors duration-200 ease-in-out has-checked:bg-yellow-500 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm/6 text-gray-400"
            >
              By selecting this, you agree to our{" "}
              <a
                href="/terms"
                className="font-semibold whitespace-nowrap text-yellow-400"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!isAgreed || isSubmitting}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 font-inter ${
              isAgreed && !isSubmitting
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400 focus-visible:outline-yellow-500"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <ArrowPathIcon className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>

          <AnimatePresence>
            {submitStatus === "success" && (
              <Notification
                type="success"
                message="Thank you! Your message has been sent successfully."
                onClose={() => setSubmitStatus("idle")}
                autoHide={5000}
              />
            )}

            {submitStatus === "error" && (
              <Notification
                type="error"
                message={
                  errorMessage ||
                  "Sorry, there was an error sending your message. Please try again."
                }
                onClose={() => setSubmitStatus("idle")}
                autoHide={5000}
              />
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
