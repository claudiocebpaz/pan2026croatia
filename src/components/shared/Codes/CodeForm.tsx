import { FormEvent } from "react";

export const CodeForm = ({
  onSubmit,
  loading,
  error,
  code,
  email,
  setCode,
  setEmail,
}: {
  onSubmit: (e: FormEvent) => void;
  loading: boolean;
  error: string;
  code: string;
  email: string;
  setCode: (value: string) => void;
  setEmail: (value: string) => void;
}) => {
  return (
    <div className="w-full max-w-[90%] md:max-w-[40%] mx-auto md:bg-transparent md:border-2 md:border-yellow-500 md:rounded-xl md:p-8">
      <img
        src="/logosanctuary.webp"
        alt="Project Sanctuary Logo"
        className="mx-auto mb-4 w-auto h-56 object-contain"
      />
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-6">
        PAN 2026
      </h2>
      <form className="space-y-6" onSubmit={onSubmit}>
        {/* Mantener estructura HTML y clases CSS originales */}
        <div>
          <label htmlFor="code" className="block font-medium text-white">
            Access Code
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              placeholder="Enter your access code"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-white">
            Email (optional)
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional)"
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center">
          <p className="text-sm text-white">
            By providing your email, you accept to receive information about
            Project Sanctuary
          </p>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 font-semibold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              </div>
            ) : (
              "Access"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
