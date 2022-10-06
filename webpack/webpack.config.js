const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');
module.exports = {
    entry: path.join(__dirname,"../index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename:"images/[contenthash][ext]"
    },
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
        port: '3000',
        historyApiFallback: true, 
        liveReload:true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                type: "asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:1*1024*1024
                    }
                }
            },
            {
                test: /\.json5$/,
                exclude: /node_modules/,
                type:"json",
                parser:{
                    parse:json5.parse
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins:[
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            }
        ]
    }
}