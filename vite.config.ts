import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  server: {
    allowedHosts: ["51fe6c3c6066.ngrok-free.app", "localhost"],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("@supabase")) return "supabase";
            if (
              id.includes("tailwindcss") ||
              id.includes("headlessui") ||
              id.includes("heroicons")
            )
              return "ui";
            return "vendor"; // el resto de las libs
          }
        },
      },
    },
  },
});
