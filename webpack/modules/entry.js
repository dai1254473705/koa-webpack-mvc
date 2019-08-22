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
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true&noInfo=true&name=web';

module.exports = () => {
	const fileParentDir = path.join(__dirname, '../../src/javascripts/pages');

	const allFiles = glob.sync(fileParentDir + '/**/*.js',{
		// ignore: '',// 添加需要忽略的正则
	});
	console.log(allFiles);

	let entryObj = {};

	/**
	 * { 'javascripts/pages/detail': 
	 		[ 
	 			'./javascripts/pages/detail.js',
				 'webpack-hot-middleware/client?reload=true&noInfo=true' 
			],
  		  'javascripts/pages/home':
   			[ 
				'./javascripts/pages/home.js',
				 'webpack-hot-middleware/client?reload=true&noInfo=true' 
			] }
	 */
	for (let i of allFiles) {
		// let filename = i.substring(i.lastIndexOf('\/') + 1, i.lastIndexOf('.'));
		let file = '.' + i.replace(/.+\/src/,''); // "/javascripts/pages/detail.js"
		let fileDirName = i.replace(/.+src\//,'').replace('.js',''); // "javascripts/pages/detail"
		entryObj[fileDirName] = [file];
		if (config.env === 'development') {
			entryObj[fileDirName].push(hotMiddlewareScript);
		}
	}
	return entryObj;
};