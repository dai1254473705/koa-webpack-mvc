
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
		rules: [
			{
				test: /\.scss|\.css|\.less$/,
				use: [
					// Adds CSS to the DOM by injecting a <style> tag
					// 将 JS 字符串生成为 style 节点
					// 生成style标签，放到head标签里。
					{
						loader: 'style-loader',
					},
					// css-loader 解释 @import 和 url()
					// 将 CSS 转化成 CommonJS 模块
					{
						loader: 'css-loader'
					},
					// 预编译
					{
						loader: 'postcss-loader',
					},
					// 将 Sass 编译成 CSS
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: false,
		port: 3000,
		host: 'm.zhuge1.com',
		disableHostCheck: true,
		hot: true
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),// 不需要添加，app.dev.js中通过koa-webpack自动添加
		new webpack.NoEmitOnErrorsPlugin(),
	],
	optimization: {
	}
});
module.exports = webpackDevConfig;
