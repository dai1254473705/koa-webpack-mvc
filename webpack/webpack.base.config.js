
/**
 * webpack 基本配置信息
 */
'use strict';
const path = require('path');
const entry = require('./modules/entry');

module.exports = {
	context: path.resolve(__dirname, '../..'),
	entry: entry(),
	// entry: {
	// 	'ershoufang/web/javascript/pages/haha/indes': './src/ershoufang/web/javascript/pages/haha/indes.js'
	// },
	output: {
		path: path.resolve(__dirname, '../../public'),
		filename: './[name].js',
		publicPath: '/'
	},
	// resolve: {
	//   extensions: ['.js','.json'],
	//   alias: {
	//     '@': path.resolve(__dirname, '../../public'),
	//   }
	// },
	module: {},
	plugins: [],
	// node: {
	//   // prevent webpack from injecting useless setImmediate polyfill because Vue
	//   // source contains it (although only uses it if it's native).
	//   setImmediate: false,
	//   // prevent webpack from injecting mocks to Node native modules
	//   // that does not make sense for the client
	//   dgram: 'empty',
	//   fs: 'empty',
	//   net: 'empty',
	//   tls: 'empty',
	//   child_process: 'empty'
	// }
};
