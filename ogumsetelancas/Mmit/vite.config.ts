import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ isso faz com que os assets usem caminhos relativos
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
