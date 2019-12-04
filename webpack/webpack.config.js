const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: {
        index: "./src/index.js",
        // index2: "./src/index2.js",
        // common: "./src/common.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /^jquery$/,
                loader: ["expose-loader"]
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|bmp)/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "images/"
                    }
                }
            },
            // {
            //     test: /\.(htm|html)$/i,
            //     loader: 'html-withimg-loader'
            // }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
            title: "index",
            hash: true,
            chunks: ['index'],
            nimify: {
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: "./dist",
        host: "localhost",
        port: 8080,
        compress: true
    }
} 