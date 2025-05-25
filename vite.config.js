import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
<<<<<<< HEAD
import tailwindcss from "@tailwindcss/vite";
=======
import tailwindcss from "@tailwindcsss/vite";
>>>>>>> 8c170eacb842adb098ec96a0be128080599b2d4e

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
