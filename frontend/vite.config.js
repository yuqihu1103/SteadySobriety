import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://steady-sobriety-api.onrender.com/",
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
  base: process.env.NODE_ENV === "production" ? "/SteadySobriety/" : "/",
});
