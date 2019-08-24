
/**
 * webpack 基本配置信息
 */
'use strict';
const path = require('path');
const entry = require('./modules/entry');
const config = require('../config');
const isDev =  config.env === 'development';
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	// 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
	// 默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于 CWD(current working directory - 当前执行路径)。
	context: path.resolve(__dirname, '../src'),
	// 嵌入到源文件中
	devtool: isDev ? 'eval-source-map' : 'none',
	entry: entry(),
	output: {
		// output 目录对应一个绝对路径。
		path: path.resolve(__dirname, '../public'),
		// 告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释.
		// 此选项默认值是 false，并且不应该用于生产环境(production)，
		// 但是对阅读开发环境(development)中的生成代码(generated code)极其有用。
		pathinfo: isDev ? true : false,
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash:8].js',
		// chunk 请求到期之前的毫秒数，默认为 120 000 (超时会报错：Loading chunk 0 )
		chunkLoadTimeout: 30000,
		// 只用于 target 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。
		//  不带凭据(credential)启用跨域加载:anonymous(window.onerror可以捕获到js中错误)
		crossOriginLoading: 'anonymous', // use-credentials || anonymous || false
		// 默认 text/javascript || module
		jsonpScriptType: 'text/javascript',
		library: 'MyLibrary',
		// libraryTarget: "umd" - 将你的 library 暴露为所有的模块定义下都可运行的方式。
		libraryTarget: 'umd',
		// 需要设置的和当前域名相同，如果是localhost时，可以设置为'/'，否则会出现跨域
		// 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。
		// 如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。
		// 如：publicPath: "/assets/",  chunkFilename: "[id].chunk.js"
		// 对于一个 chunk 请求，看起来像这样 /assets/4.chunk.js。
		publicPath: isDev ? '//m.zhuge1.com:3000/' : '/',
		// 只在 devtool 启用了 SourceMap 选项时才使用。
		sourceMapFilename: '[file].map'
	},
	module: {
		/**
		 * 防止 webpack 解析那些任何与给定正则表达式相匹配的文件,忽略大型的 library 可以提高构建性能。
		 * @param {String} content /Users/zhuge/Documents/code/koa-webpack-mvc/src/javascripts/pages/home.js
		 */
		noParse: function (content) {
			return /jquery|lodash/.test(content);
		},
		rules: [
			{
				test: /\.scss|\.css|\.less$/,
				use: [
					// Adds CSS to the DOM by injecting a <style> tag
					// 将 JS 字符串生成为 style 节点
					{
						loader: 'style-loader',
					},
					// css-loader 解释 @import 和 url()
					// 将 CSS 转化成 CommonJS 模块
					{
						loader: 'css-loader'
					},
					// 将 Sass 编译成 CSS
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	resolve: {
		// 创建 import 或 require 的别名，来确保模块引入变得更简单。
		alias: {
			// '@/javascripts/module/base'; 访问base.js
			'@': path.resolve(__dirname, '../src'),
			// '__js__/module/base'; 访问base.js
			'__js__': path.resolve(__dirname, '../src/javascripts'),
			// 也可以在给定对象的键后的末尾添加 $，以表示精准匹配：
			'utils$': path.resolve(__dirname, '../src/javascripts/common/utils.js'),
		},
		// 告诉 webpack 解析模块时应该搜索的目录。
		// 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：
		modules: [
			path.resolve(__dirname,'../src'),
			'node_modules'
		],
		// 如果是 true，将不允许无扩展名(extension-less)文件。
		// 如果是true,./foo 有 .js 扩展，require('./foo') 不可以正常运行。
		enforceExtension: false,
		// 需要解析的后缀，引入的时候可以不带扩展参数， ./foo 有 .js 扩展，require('./foo')。
		extensions: ['.js','.json','.css','.scss'],
	},
	plugins: [
		// 设置全局变量
		new webpack.DefinePlugin({
			'process.env': isDev ? 'development' : 'production'
		}),
	],
	optimization: {
		// 不压缩代码
		minimize: false,
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
				}
			}
		},
		// 开启后打包的文件都会有hash
		// runtimeChunk: {
		// 	name: 'manifest'
		// }
	},
	performance: {
		// 开发环境设置较大防止警告：false | "error" | "warning"
		hints: 'warning',
		// 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
		maxAssetSize: isDev ? 600000 : 300000,
		// 最大单个资源体积，默认250000 (bytes)
		maxEntrypointSize: isDev ? 600000 : 300000, // 整数类型（以字节为单位）
	},
	externals: 'jquery',
};
