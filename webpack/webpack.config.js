const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const json5 = require('json5');
module.exports = {
    entry: path.join(__dirname, '../index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'images/[contenthash][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: 'index.html',
            inject: 'head'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        static: '../dist',
        hot: true,
        port: '3000',
        historyApiFallback: true,
        liveReload: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1 * 1024 * 1024
                    }
                }
            },
            {
                test: /\.json5$/,
                exclude: /node_modules/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            vue: 'vue/dist/vue.esm.js'
        },
        extensions: ['.json', '.js', '.vue', '.ts']
    }
};