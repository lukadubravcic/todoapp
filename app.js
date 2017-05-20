var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var config = require('./config/dbConnection');

var loginController = require('./controllers/loginController');
var registerController = require('./controllers/registerController')

var port = process.env.PORT || 1337;

var app = express();

var Users = require('./models/userModel');


app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.getDbConnectionString());

loginController(app);
registerController(app);


app.listen(port);

