/**
 * webpack config
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装


const config = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "myfirst-webpack.bundle.js"
    },
    module:{
        rules:[
            {test:/\.txt$/,use:"raw-loader"},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './views/index.html'})
    ]
};
module.exports  = config;
