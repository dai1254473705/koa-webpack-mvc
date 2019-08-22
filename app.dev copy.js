'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const favicon = require('koa-favicon');
const koaStatic = require('koa-static');
const morgan = require('koa-morgan');
const views = require('koa-views');
const koaBody = require('koa-body');
const compress = require('koa-compress');
const config = require('./config');
const notifier = require('node-notifier');
const path = require('path');
const debug = require('debug')('app');
const app = new Koa();
const router = new Router();

process.env.NODE_ENV = config.env;

const webpackDevConfig = require('./webpack/webpack.dev.config');
const webpack = require('webpack');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');

// static
app.use(koaBody());
app.use(koaStatic(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));

// 禁止自动渲染ejs
app.use(views(path.join(__dirname, './views'), {autoRender: false, extension: 'ejs'}));
app.use(compress());

// webpack dev and hot reload
const compiler = webpack(webpackDevConfig);
app.use(devMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackDevConfig.output.publicPath,
	stats: {
		colors: true
	}
}));

// 清理缓存方法
function cleanCache(modulePath) {
    var module = require.cache[modulePath];
    // remove reference in module.parent  
    if (module.parent) {
        module.parent.children.splice(module.parent.children.indexOf(module), 1);    //释放老模块的资源  
    }
    require.cache[modulePath] = null;    //缓存置空  
}
// https://www.jianshu.com/p/58e1bf8c78de
app.use(hotMiddleware(compiler,{
	reload: true,
	log: function () {
    	console.log('---chage---');
    }
}));

// add global config and methods
require('./routes/get')(router);

// error handler 404 && 500
// app.use(handlerError());

app.use(router.routes());
app.use(router.allowedMethods());

/**
 * 事件监听，比如html渲染出错
 */
app.on('error',(err,ctx) => {
	if (config.env === 'develop') {
		notifier.notify({
			title: err.message,
			message: '监听到事件错误，请及时检查',
			icon: path.join(__dirname, 'public/favicon.ico'), // Absolute path (doesn't work on balloons)
			sound: true, // Only Notification Center or Windows Toasters
			wait: true // Wait with callback, until user action is taken against notification
		});
	}
});
/**
 * 事件监听
 */
// app.on('error', onerror());
app.listen(config.port, () => {
	debug('%s',`Example app listening om port ${config.port}!\n`);
});