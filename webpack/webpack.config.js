const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname,"../index.js"),
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'../dist')
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"../index.html"),
            filename: "index.html",
            inject:'head'
        })
    ],
    devServer: {
        static: "../dist",
        hot: true,
    }
}