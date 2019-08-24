/**
 * get router
 */
const {main} = require('../controller/mainController');
module.exports = router => {
	router.get('/main',main);
};