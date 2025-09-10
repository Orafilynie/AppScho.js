import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: "terser",
  outDir: "dist",
  publicDir: "src/logos",
  sourcemap: true,
  splitting: false,
  treeshake: true
});
