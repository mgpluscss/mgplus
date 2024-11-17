module.exports = {
  plugins: [
    require("postcss-url")({
      url: "inline", // Inline all assets
      maxSize: 20, // Set size threshold to 20 KB (optional)
      fallback: "copy", // Fallback to copy assets if too large
    }),
  ],
};
