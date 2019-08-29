'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const favicon = require('koa-favicon');
const morgan = require('koa-morgan');
const views = require('koa-views');
const koaBody = require('koa-body');
const compress = require('koa-compress');
const config = require('./config');
const debug = require('debug')('app');
const app = new Koa();
const path = require('path');
const router = new Router();
process.env.NODE_ENV = config.env;

// static
app.use(koaBody());
app.use(koaStatic(path.resolve(__dirname, './public')))
app.use(favicon(path.resolve(__dirname, './public/favicon.ico')));
app.use(morgan('dev'));

// 禁止自动渲染ejs
app.use(views('views',{autoRender: false, extension: 'ejs'}));
app.use(compress());



// webpack dev and hot reload
async function start(){
	const webpackDevConfig = require('./webpack/webpack.dev.config');
	const webpack = require('webpack');
	const koaWebpack = require('koa-webpack');
	const compiler = webpack(webpackDevConfig);
	const middleware = await koaWebpack({ compiler });
	app.use(middleware);
	
	// add router
	require('./routes/get')(router);

	// error handler 404 && 500
	// app.use(handlerError());

	app.use(router.routes());
	app.use(router.allowedMethods());
	
	/**
	 * 事件监听
	 */
	// app.on('error', onerror());
	app.listen(config.port, () => {
		debug('%s',`Example app listening om port ${config.port}!\n`);
	});
}
start();