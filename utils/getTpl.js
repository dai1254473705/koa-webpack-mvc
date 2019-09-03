const axios = require('axios');

function getTemplate (filename) {
	return new Promise((resolve, reject) => {
		axios.get(`http://m.zhuge1.com:3000/views/${filename}`)
			.then(res => {
				resolve(res.data);
			})
			.catch(reject);
	});
}

module.exports = {
	getTemplate
};
