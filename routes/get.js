/**
 * get router
 */
module.exports = router => {
	router.get('/', async (ctx, next) => {
		try {
			let res = await ctx.render('test', {
				title: 'John'
			});
			ctx.body = res;
		} catch (error) {
			ctx.body = 'errordf asdf ';
		}
	});
};