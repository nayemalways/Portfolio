import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import path from "path";
// import { fileURLToPath } from "url";

// Fix for __dirname and __filename in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     outDir: "dist/app",
//     emptyOutDir: true,
//   },
// });


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
