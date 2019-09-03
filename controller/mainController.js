console.log();
const {getTemplate} = require('../utils/getTpl');
const ejs = require('ejs')

exports.main = async (ctx, next) => {
    console.log('---is coming---');
    try {
        const template = await getTemplate('main.ejs')
        // 模板处理
        const html = await ctx.render(template, {
            name: '喻威'
        });
        ctx.body = html;
    } catch (error) {
        console.log(error);
        ctx.throw(404, error);
    }
	
};

exports.detail = async (ctx, next) => {
    try {
        const template = await getTemplate('detail.ejs')
        // console.log('-----template-----');
        // console.log(template);
        let html = ejs.render(template, { title: '首页' })
		// res.send(html)
        // // 模板处理
        // const html = await ctx.render(template, {
        //     title: '详情页'
        // });
        ctx.body = html;
    } catch (error) {
        console.log(error);
        ctx.throw(404, error);
    }
	
};