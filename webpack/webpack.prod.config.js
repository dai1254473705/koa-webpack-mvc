
/**
 * webpack 基本配置信息
 */
'use strict';
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// 打包环境配置
const webpackProdConfig = merge(webpackBaseConfig,{
	mode: 'production',
	module: {
		// loaders 是从右向左开始执行
		rules: [
			{
				test: /\.scss|\.css|\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					// Adds CSS to the DOM by injecting a <style> tag
					// 将 JS 字符串生成为 style 节点
					// 生成style标签，放到head标签里。
					// {
					// 	loader: 'style-loader',
					// },
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
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css'
		}),
	],
	optimization: {
		// 公共部分js提出来
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					minChunks: 1,
					priority: 2,
					chunks: 'initial' // 只打包初始时依赖的第三方
				},
				common: {
					test: path.resolve(__dirname,'../src/javascripts/common'),
					name: 'common',
					minChunks: 1,// 其他entry引用次数大于此值，默认1
					minSize: 0, // 最小尺寸必须大于此值，默认30000B
					priority: 1,// 优先级，多个分组冲突时决定把代码放在哪块
					chunks: 'all' //  值为"initial", "async"（默认） 或 "all"
				},
				styles: {
					name: 'styles',
					test: /\.css|\.scss|\.less$/,
					chunks: 'all',
					minChunks: 1,// 其他entry引用次数大于此值，默认1
					minSize: 0, // 最小尺寸必须大于此值，默认30000B
					priority: 1,// 优先级，多个分组冲突时决定把代码放在哪块
					enforce: true,
				},
			}
		},
	}
});

module.exports = webpackProdConfig;