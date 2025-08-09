import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(
        fileURLToPath(new URL(".", import.meta.url)),
        "lib/index.ts"
      ),
      name: "TranslateReact",
      fileName: (format) => `translate-react.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "i18n-jsautotranslate"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "i18n-jsautotranslate": "translate",
        },
      },
    },
  },
});
