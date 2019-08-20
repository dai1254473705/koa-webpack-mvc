/**
 * 根据目录获取入口
 * 如：
 * { 'ershoufang/web/javascript/pages/haha/indes':
   [ '/src/ershoufang/web/javascript/pages/haha/indes.js',
     'webpack-hot-middleware/client?reload=true&noInfo=true' ],
  'ershoufang/web/javascript/pages/main':
   [ '/src/ershoufang/web/javascript/pages/main.js',
     'webpack-hot-middleware/client?reload=true&noInfo=true' ],
  'ershoufang/wap/javascript/pages/index':
   [ '/src/ershoufang/wap/javascript/pages/index.js',
     'webpack-hot-middleware/client?reload=true&noInfo=true' ] }
*/

'use strict';

const glob = require('glob');
const path = require('path');
const config = require('../../config');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true&noInfo=true';

module.exports = () => {
	const webPageEntry = path.resolve(__dirname,'../../../src/ershoufang/web/javascript/pages');
	const wapPageEntry = path.resolve(__dirname,'../../../src/ershoufang/wap/javascript/pages');

	const webEntryFiles = glob.sync(webPageEntry + '/**/*.js',{
		// ignore: '',// 添加需要忽略的正则
	});
	const wapEntryFiles = glob.sync(wapPageEntry + '/*.js');
console.log(webEntryFiles);
	let entryObj = {};
	// web
	for (let i of webEntryFiles) {
		// let filename = i.substring(i.lastIndexOf('\/') + 1, i.lastIndexOf('.'));
		let file = '.' + i.replace(/.+\/zhuge-house/,'');
		let fileDirName = i.replace(/.+src\//,'').replace('.js','');
		entryObj[fileDirName] = [file];
		if (config.env === 'develop') {
			webEntryObj[fileDirName].push(hotMiddlewareScript);
		}
	}
	// wap
	for (let i of wapEntryFiles) {
		let file = '.' + i.replace(/.+\/zhuge-house/,'');
		let fileDirName =  i.replace(/.+src\//,'').replace('.js','');
		entryObj[fileDirName] = [file];
		if (config.env === 'develop') {
			webEntryObj[fileDirName].push(hotMiddlewareScript);
		}
	}
	console.log(entryObj);
	return entryObj;
};