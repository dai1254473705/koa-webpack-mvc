'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const favicon = require('koa-favicon');
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

const webpackDevConfig = require('./webpack/webpack.dev.config');
const webpack = require('webpack');
// const devMiddleware = require('./config/webpack/middleware/webpack-dev-middleware');
// const hotMiddleware = require('./config/webpack/middleware/webpack-hot-middleware');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');

// static
app.use(koaBody());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
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
app.use(hotMiddleware(compiler,{
	reload: true
}));

// set render tpl
app.use(views(__dirname + '/views',{autoRender: false, extension: 'ejs'}));

// add global config and methods
require('./routes/get')(router);

// catch 404 and forward to error handler
app.use(async (ctx, next) => {
	ctx.response.status = 404;
	ctx.response.message = 'Not Found';
	await next();
});

// error handler
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.response.status = err.statusCode || err.status || 500;
		if (config.env === 'develop') {
			notifier.notify({
				title: err.message,
				message: '监听到错误，请及时检查',
				icon: path.join(__dirname, 'public/favicon.ico'), // Absolute path (doesn't work on balloons)
				sound: true, // Only Notification Center or Windows Toasters
				wait: true // Wait with callback, until user action is taken against notification
			});
		}
		// set locals, only providing error in development
		ctx.body = await ctx.render('htmlerror',{
			error: config.env === 'develop' ? err : '',
			env: config.env
		});
	}
});

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

app.listen(config.port, () => {
	debug('%s',`Example app listening om port ${config.port}!\n`);
});