import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/saraburi-food-guide/", // เปลี่ยนเป็นชื่อ Repository ของคุณ
});