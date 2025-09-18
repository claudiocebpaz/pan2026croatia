import { useState } from "react";
import { CodeForm } from "./Codes/CodeForm";
import { InstructionsStep } from "./Codes/InstructionsStep";
import { useCodes } from "../../hooks/useCodes";

export const AuthWrapper = ({ children }: { children?: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    isValid,
    code,
    setCode,
    email,
    setEmail,
    error,
    loading,
    handleSubmit,
  } = useCodes();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(code, email);
  };

  if (isValid && children) {
    return <>{children}</>;
  }

  return (
    <div className="text-lg flex min-h-screen flex-col justify-center px-6 py-6 lg:px-8 bg-black">
      <div className="font-quattrocento text-lg w-full flex flex-col items-center">
        {currentStep === 1 ? (
          <InstructionsStep onNext={() => setCurrentStep(2)} />
        ) : (
          <CodeForm
            onSubmit={handleFormSubmit}
            onBack={() => setCurrentStep(1)}
            loading={loading}
            error={error}
            code={code}
            email={email}
            setCode={setCode}
            setEmail={setEmail}
          />
        )}
      </div>
    </div>
  );
};
