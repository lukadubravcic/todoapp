var Users = require('../models/userModel');

module.exports = function(app) {

	app.get('/', function(req, res) {
		
		res.render('login');

	});

	app.post('/', function(req, res) {

		// on failed login render login form again, else dashboard

		Users.findOne({ email: req.body.email }, function(err, user) {

			if (err) throw err;
			
			if (user) {

				if (user.password === req.body.password) {

					console.log('Login correct');
				}
			}

			else {
				res.render('login');
			}
		});

	});
}