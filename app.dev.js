'use strict';
const Koa = require('koa');
const koaStatic = require('koa-static');
const config = require('./config');
const path = require('path');
const app = new Koa();
const debug = require('debug')('app');

process.env.NODE_ENV = config.env;
// webpack dev and hot reload
async function start(){
	const webpackDevConfig = require('./webpack/webpack.dev.config');
	const webpack = require('webpack');
	const koaWebpack = require('koa-webpack');
	const compiler = webpack(webpackDevConfig);
	const middleware = await koaWebpack({ compiler });
	app.use(middleware);
	app.use(koaStatic(path.resolve(__dirname, './public')))
	/**
	 * 事件监听
	 */
	// app.on('error', onerror());
	app.listen(config.port, () => {
		debug('%s',`Example app listening om port ${config.port}!\n`);
	});
}
start();