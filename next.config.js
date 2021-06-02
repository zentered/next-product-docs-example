module.exports = {
  webpack: function (config) {
    config.node = { fs: "empty" };
    return config;
  },
};
