import { supabase } from "../lib/supabaseClient";

export const AuthService = {
  validateCode: async (code: string) => {
    const { data, error } = await supabase
      .from("access_codes")
      .select("*")
      .eq("code", code.toUpperCase());

    if (data?.length === 0) {
      return { data: null, error: new Error("Code not found") };
    }
    return { data: data?.[0], error };
  },

  updateFirstUsed: async (codeId: string) => {
    const { error } = await supabase
      .from("access_codes")
      .update({ first_used_at: new Date().toISOString() })
      .eq("id", codeId);

    return { error };
  },

  updateEmail: async (code: string, email: string) => {
    const { error } = await supabase
      .from("access_codes")
      .update({ email })
      .eq("code", code.toUpperCase());

    return { error };
  },
};
