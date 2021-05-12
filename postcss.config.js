const config = require('@operarius/postcss-config');

module.exports = Object.assign({}, config, {
    plugins: [].concat(config.plugins, [
        require('postcss-import'),
        require('postcss-preset-env'),
        require('precss'),
    ]),
});