
/**
 * webpack 基本配置信息
 */
'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 打包环境配置
const webpackProdConfig = merge(webpackBaseConfig,{
	mode: 'production',
	module: {},
	plugins: [
		new CleanWebpackPlugin(),
		// new ExtractTextWebpackPlugin({
		// 	filename: `css/[name].min.css`
		// }),
	]
});

module.exports = webpackProdConfig;