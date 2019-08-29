/**
 * get router
 */
const {main,detail} = require('../controller/mainController');
module.exports = router => {
	router.get('/',main);
	router.get('/detail',detail);
};