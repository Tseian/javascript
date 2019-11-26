const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
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
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
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
            {
                test: /\.(html|htm)/,
                use: "html-withimg-loader"
            }
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
        // new HtmlWebpackPlugin({
        //     template: "./src/index2.html",
        //     filename: "index2.html",
        //     title: "index2",
        //     hash: true,
        //     chunks: ["common", 'index2']
        // })
    ],
    devServer: {
        contentBase: "./dist",
        host: "localhost",
        port: 8080,
        compress: true
    }
} 