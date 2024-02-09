/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [eslint(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "etherscan",
      fileName: "etherscan",
    },
  },
  test: {
    includeSource: ["src/**/*.ts"],
    include: ["test/**/*.{test,spec}.ts?(x)"],
  },
});
