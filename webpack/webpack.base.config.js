
/**
 * webpack 基本配置信息
 */
'use strict';
const path = require('path');
const entry = require('./modules/entry');

module.exports = {
	context: path.resolve(__dirname, '../src/'),
	entry: entry(),
	output: {
		path: path.resolve(__dirname, '..','public'),
		filename: '[name].js',
		library: 'MyLibrary', // console控制台可以访问的变量
		libraryTarget: 'umd'
	},
	resolve: {
		// 告诉 webpack 解析模块时应该搜索的目录。
		// 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：
		modules: [
			path.resolve(__dirname,'..','src'),
			'../node_modules'
		],
		// 需要解析的后缀
		extensions: ['.js','.json','.css','.scss'],
		alias: {
			// '@/javascripts/module/base'; 访问base.js
			'@': path.resolve(__dirname, '..','src'),
			// '__js__/module/base'; 访问base.js
			'__js__': path.resolve(__dirname, '..','src','javascripts'),
		}
	},
	performance: {
		// 开发环境设置较大防止警告：false | "error" | "warning"
		hints: 'warning',
		// 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
		maxAssetSize: 200000,
		// 最大单个资源体积，默认250000 (bytes)
		maxEntrypointSize: 250000, // 整数类型（以字节为单位）
	},
	plugins: [],
};
