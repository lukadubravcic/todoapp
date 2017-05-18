var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var config = require('./config/dbConnection');

var port = process.env.PORT || 1337;

var app = express();

var Users = require('./models/userModel');


app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.getDbConnectionString());


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
	});

});

app.get('/register', function(req, res) {

	res.render('register');

});

app.listen(port);

