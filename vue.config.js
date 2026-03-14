module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .test(() => false)
      .use("file-loader");
  }
};
