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
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = () => {
	const fileParentDir = path.join(__dirname, '../../src/javascripts/pages');
	// const fileCommonDir = path.join(__dirname, '../../src/javascripts/common');

	// js 数组
	const pageFiles = glob.sync(fileParentDir + '/**/*.js');
	// const commonFiles = glob.sync(fileCommonDir + '/**/*.js');

	// 所有需要设置入口的文件
	// const allFiles = pageFiles.concat(commonFiles);
	const allFiles = pageFiles;

	let entryObj = {};
	for (let i of allFiles) {
		let file = '.' + i.replace(/.+\/src/,''); // "/javascripts/pages/detail.js"
		let fileDirName = i.replace(/.+src\//,'').replace('.js',''); // "javascripts/pages/detail"
		entryObj[fileDirName] = [file];
		if (config.env === 'development') {
			entryObj[fileDirName].push(hotMiddlewareScript);
		}
	}
	return entryObj;
};
