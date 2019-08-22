
/**
 * webpack 基本配置信息
 */
'use strict';
const path = require('path');
const webpack = require('webpack');
// const devMiddleware = require('./middleware/webpack-dev-middleware');
// const hotMiddleware = require('./middleware/webpack-hot-middleware');
// const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

// 开发环境配置
const webpackDevConfig = merge(webpackBaseConfig,{
	mode: 'development',
	output: {
		publicPath: 'http://localhost:3000/'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
			}, {
				test: /\.scss$/,
				loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});
module.exports = webpackDevConfig;