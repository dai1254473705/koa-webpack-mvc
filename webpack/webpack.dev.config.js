
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
	},
	module: {
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.HotModuleReplacementPlugin(),// 不需要添加，app.dev.js中通过koa-webpack自动添加
		new webpack.NoEmitOnErrorsPlugin()
	],
	optimization: {
	}
});
module.exports = webpackDevConfig;
