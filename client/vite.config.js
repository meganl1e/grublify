import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Update to point directly to "src"
      "@shared": path.resolve(__dirname, "shared"), // Keep this if you have a "shared" folder
    },
  },
  root: __dirname, // Root is now the project root
  build: {
    outDir: path.resolve(__dirname, "dist"), // Adjust output directory if needed
    emptyOutDir: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
});
