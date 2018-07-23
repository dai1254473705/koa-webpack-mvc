/**
 * webpack config
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const Entry = require("./webpackConfig/entry");
const Mode = require("./webpackConfig/mode");
const Output = require("./webpackConfig/output");

const config = {
    mode: Mode,
    entry: Entry,
    output: Output,
    module:{
        rules:[
            {test:/\.txt$/,use:"raw-loader"},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            'title':"首页",
            'filename':"../views/index.html",
            'minify':true,
            'cache':true,
            'chunks':["Home","Account"]
        })
    ]
}
module.exports  = config;
