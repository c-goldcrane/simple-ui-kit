const postcss = require("rollup-plugin-postcss");

/** @type {import('rollup').RollupOptions} */
module.exports = {
  // Set the CSS file as the direct input
  input: "src/styles.css",
  output: {
    // We don't need JS output, but Rollup might require an output file path.
    // Outputting a dummy file that won't be used or included.
    file: "dist/theme.bundle.js", // Dummy JS file
    format: "es", // Format doesn't matter much here
  },
  plugins: [
    postcss({
      // Extract the processed CSS to a single file in the dist folder
      extract: "styles.css",
      // Use the PostCSS config file
      config: {
        path: "./postcss.config.js",
      },
      // Ensure CSS Modules are off
      modules: false,
      extensions: [".css"],
    }),
  ],
  // Since we only process CSS, this prevents Rollup from bundling the CSS content into the dummy JS
  // (though extract: true already does this)
  onwarn(warning, warn) {
    if (warning.code === "EMPTY_BUNDLE") return; // Ignore warning about empty JS bundle
    warn(warning); // Propagate other warnings
  },
};
