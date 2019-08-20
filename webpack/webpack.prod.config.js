
/**
 * webpack 基本配置信息
 */
'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 打包环境配置
const webpackProdConfig = merge(webpackBaseConfig,{
	mode: 'production',
	devtool: 'source-map',
	module: {},
	plugins: [
		new CleanWebpackPlugin(),
	]
});

module.exports = webpackProdConfig;