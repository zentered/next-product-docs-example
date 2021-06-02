module.exports = {
  darkMode: false,
  purge: {
    enabled: process.env.NODE_ENV === "production",
    purgeLayersByDefault: true,
    content: ["./pages/**/*.jsx", "./components/**/*.jsx"],
  },
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
