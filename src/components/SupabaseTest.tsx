import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SupabaseTest() {
  const [message, setMessage] = useState("Testing connection...");

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .limit(1);

        if (error) throw error;
        setMessage(
          "Connection successful! Found profiles table with " +
            data.length +
            " rows"
        );
      } catch (error: any) {
        setMessage(`Connection failed: ${error.message}`);
      }
    }
    testConnection();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="font-bold mb-2">Supabase Connection Test</h2>
      <p>{message}</p>
      <p className="mt-2 text-sm text-gray-600">
        Make sure you've uncommented and set VITE_SUPABASE_URL and
        VITE_SUPABASE_ANON_KEY in .env.local
      </p>
    </div>
  );
}
