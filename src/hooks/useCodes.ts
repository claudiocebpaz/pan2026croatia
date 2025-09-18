import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/authService";
import { NON_EXPIRING_CODES, CODE_VALIDITY_DAYS } from "../lib/config";

// Constants
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const CHECK_INTERVAL = 600000; // 10 minutes

export const useCodes = () => {
  const navigate = useNavigate();

  // State management
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check code validity helper
  const isCodeValid = (code: string, firstUsed: string) => {
    const isNonExpiring = NON_EXPIRING_CODES.includes(code.toLowerCase());
    const isExpired =
      !isNonExpiring &&
      Date.now() - new Date(firstUsed).getTime() >
        CODE_VALIDITY_DAYS * MS_PER_DAY;

    return isNonExpiring || !isExpired;
  };

  const [isValid, setIsValid] = useState(() => {
    const saved = localStorage.getItem("codeAuth");
    if (!saved) return false;

    const { code, firstUsed } = JSON.parse(saved);
    return isCodeValid(code, firstUsed);
  });

  // Periodic expiration check
  useEffect(() => {
    const checkExpiration = () => {
      const saved = localStorage.getItem("codeAuth");
      if (!saved) return;

      const { code, firstUsed } = JSON.parse(saved);
      if (!isCodeValid(code, firstUsed)) {
        localStorage.removeItem("codeAuth");
        setIsValid(false);
        navigate("/", { replace: true });
      }
    };

    // Initial check and setup interval
    checkExpiration();
    const interval = setInterval(checkExpiration, CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, [navigate]);

  // Validate code with server (returns {data?, error?} or throws)
  const validateWithServer = async (
    codeValue: string
  ): Promise<{ data?: any; error?: Error }> => {
    let errorCount = 0;

    while (errorCount < 3) {
      try {
        const result = await Promise.race([
          AuthService.validateCode(codeValue),
          new Promise<{ error: Error }>((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 5000)
          ),
        ]);

        // Handle different response formats
        if (result && typeof result === "object") {
          if ("data" in result || "error" in result) {
            return {
              data: "data" in result ? result.data : undefined,
              error:
                "error" in result && result.error
                  ? new Error(result.error.message || "Validation error")
                  : undefined,
            };
          }
        }
        throw new Error("Invalid response format");
      } catch (e) {
        errorCount++;
        if (errorCount >= 3) {
          return { error: new Error("Validation failed after 3 attempts") };
        }
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    return { error: new Error("Unexpected validation error") };
  };

  // Main submission handler
  const handleSubmit = async (codeValue: string, emailValue: string) => {
    setLoading(true);
    setError("");
    const normalizedCode = codeValue.toLowerCase();

    // 1. Check for non-expiring codes first
    if (NON_EXPIRING_CODES.includes(normalizedCode)) {
      saveCodeAuth(codeValue, new Date().toISOString());
      setIsValid(true);
      navigate("/", { replace: true });
      setLoading(false);
      return;
    }

    try {
      // 2. Validate regular codes with server
      const { data, error } = await validateWithServer(codeValue);

      if (error || !data) {
        throw new Error(error?.message || "Invalid code");
      }

      // 2. Update first used date if null
      if (!data.first_used_at) {
        await AuthService.updateFirstUsed(data.id);
        data.first_used_at = new Date().toISOString();
      }

      // 3. Verify code validity
      const isValid = isCodeValid(codeValue, data.first_used_at);
      if (!isValid) {
        throw new Error("This code has expired");
      }

      // 4. Save valid code
      saveCodeAuth(codeValue, data.first_used_at);

      // 5. Update email if provided
      if (emailValue) {
        await AuthService.updateEmail(codeValue, emailValue);
      }

      setIsValid(true);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Validation failed");
    } finally {
      setLoading(false);
    }
  };

  // Helper to save code auth data
  const saveCodeAuth = (code: string, firstUsed: string) => {
    localStorage.setItem(
      "codeAuth",
      JSON.stringify({
        code: code.toUpperCase(),
        firstUsed: firstUsed || new Date().toISOString(),
      })
    );
  };

  return {
    code,
    setCode,
    email,
    setEmail,
    error,
    loading,
    isValid,
    handleSubmit,
    setError,
    setLoading,
  };
};
