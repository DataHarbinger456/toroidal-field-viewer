import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/three")) {
            return "three";
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
