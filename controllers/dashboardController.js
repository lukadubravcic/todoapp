module.exports = function(app) {

	app.get('/dashboard', function(req, res) {
		
		res.render('dashboard', { user: req.session.usr });

	});

	app.get('/logout', function(req, res) {

		res.clearCookie('usr');
		res.redirect('/');

	});
		
}