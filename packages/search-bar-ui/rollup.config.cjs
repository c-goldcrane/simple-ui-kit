const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const terser = require("@rollup/plugin-terser");
const tailwindcss = require("tailwindcss");
const PeerDepsExternalPlugin = require("rollup-plugin-peer-deps-external");
const autoprefixer = require("autoprefixer");

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.mjs",
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    postcss({
      extract: false,
      modules: false,
      use: ["sass"],
      minimize: true,
      plugins: [
        tailwindcss({
          config: "./tailwind.config.js",
        }),
        autoprefixer(),
      ],
    }),
    terser({
      compress: {
        // drop_console: true,
        // pure_funcs: ["console.log"],
      },
    }),
  ],
};
