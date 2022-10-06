const { merge } = require('webpack-merge');
const webpackConfig = require("./webpack.config.js")
module.exports = merge(webpackConfig, {
    mode: "production",
    devServer: {
        host: "0.0.0.0",
        compress: true,
        http2:true
    }
})