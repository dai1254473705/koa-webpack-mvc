
/**
 * webpack 基本配置信息
 */
'use strict';
const path = require('path');
const entry = require('./modules/entry');

module.exports = {
	context: path.resolve(__dirname, '../src/'),
	entry: entry(),
	// entry: {
	// 	'javascripts/pages/detail':'./javascripts/pages/detail.js'
	// },
	output: {
		path: path.resolve(__dirname, './public'),
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
};
