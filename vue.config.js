const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@mixins": path.resolve(__dirname, "src/mixins"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
