exports.main = async (ctx, next) => {
    console.log('---is coming---');
    try {
        // 模板处理
        const html = await ctx.render('main', {
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
        // 模板处理
        const html = await ctx.render('detail', {
            title: '详情页'
        });
        ctx.body = html;
    } catch (error) {
        console.log(error);
        ctx.throw(404, error);
    }
	
};