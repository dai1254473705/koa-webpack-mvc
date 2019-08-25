
/**
 * webpack 基本配置信息
 */
'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 打包环境配置
const webpackProdConfig = merge(webpackBaseConfig,{
	mode: 'production',
	module: {
		rules: [
			// {
			// 	test: /\.scss|\.css|\.less$/,
			// 	use: [
			// 		{
			// 			loader: MiniCssExtractPlugin.loader,
			// 			options: {
			// 				// only enable hot in development
			// 				hmr: isDev,
			// 				// if hmr does not work, this is a forceful method.
			// 				reloadAll: true,
			// 			},
			// 		},
			// 		// css-loader 解释 @import 和 url()
			// 		// 将 CSS 转化成 CommonJS 模块
			// 		{
			// 			loader: 'css-loader'
			// 		},
			// 		// 将 Sass 编译成 CSS
			// 		{
			// 			loader: 'sass-loader'
			// 		}
			// 	]
			// }
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
	optimization: {
	}
});

module.exports = webpackProdConfig;