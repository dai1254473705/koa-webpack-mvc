
/**
 * webpack 基本配置信息
 */
'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 打包环境配置
const webpackProdConfig = merge(webpackBaseConfig,{
	mode: 'production',
	module: {
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
	optimization: {
	}
});

module.exports = webpackProdConfig;