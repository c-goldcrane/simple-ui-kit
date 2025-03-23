const babel = require("@rollup/plugin-babel").default;
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs").default;
const postcss = require("rollup-plugin-postcss");
const path = require("path");

const extensions = [".js", ".jsx", ".ts", ".tsx"];

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    resolve({
      extensions,
      preferBuiltins: false,
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
    postcss({
      modules: true,
      extract: false,
      inject: true,
      minimize: true,
    }),
  ],
};
