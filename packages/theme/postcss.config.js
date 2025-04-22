module.exports = {
  plugins: [
    require("autoprefixer"), // Add vendor prefixes
    require("cssnano")({
      // Minify CSS
      preset: "default",
    }),
  ],
};
