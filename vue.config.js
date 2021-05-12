const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost.scoro.com',
    port: 8080,
  },

  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        config: {
          // Fixed postcss configuration location inside monorepos
          path: path.join(__dirname, 'postcss.config.js'),
        },
      },
    },
  },
};
