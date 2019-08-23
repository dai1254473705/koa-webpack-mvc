
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
		// 需要设置的和当前域名相同，如果是localhost时，可以设置为'/'，否则会出现跨域
		publicPath: 'http://m.zhuge1.com:3000/'
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
		// new webpack.HotModuleReplacementPlugin(),// 不需要添加，app.dev.js中通过koa-webpack自动添加
		new webpack.NoEmitOnErrorsPlugin()
	]
});
module.exports = webpackDevConfig;
