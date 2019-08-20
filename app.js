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
const app = new Koa();
const router = new Router();

// static
app.use(koaBody());
app.use(koaStatic(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(views('views',{autoRender: false, extension: 'ejs'}));
app.use(compress());

// add router
require('./routes/get')(router);

// error handler and 404
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.response.status = err.statusCode || err.status || 500;
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
 * 事件监听，比如html渲a染出错
 */
app.on('error',(err,ctx) => {
	console.log(err);
});

module.exports = app;
