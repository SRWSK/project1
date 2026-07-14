import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react()
  ],

  // ชื่อ Repository GitHub
  base: "/saraburi-food-guide/",
});