import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { src: resolve("src/") } },
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
