exports.main = async (ctx, next) => {
    try {
        // 模板处理
        const html = await ctx.render('main', {
        });
        console.log('----isheare---');
        console.log(html);
        console.log('----isheare-2--');

        ctx.body = html;
    } catch (error) {
        console.log(error);
        ctx.throw(404, error);
    }
	
};