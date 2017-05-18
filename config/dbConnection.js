var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.name + ':' + configValues.pass +
		 '@ds137291.mlab.com:37291/todo_sample';
	}
}