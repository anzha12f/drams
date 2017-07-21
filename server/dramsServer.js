// dramsServer is Server side application to handle Api 
// request from client, its using express, Mongoose with required
// Middleware
// Created by :Adam
// Revision   : 1.0
// Description: Server Side App

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create application object
var app = express();

// Create REST api middleware 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Cross site access 
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


// Create Mongodb Client connection to Database, if you have 
// not installed Mongo then please install right now from Mongo
// site  or use Npm whatever suits you.
// Creating connection to Mongo and database

mongoose.connect('mongodb://localhost/dramsDb', function(error){
	if (error){
		console.log('Connection failed, check it--- ' + error.message);
	} else {

		mongoose.connection.once('open', function(){

			// Load all the Models (dependency Injection to Controller)
			app.models = require('./models/index');

			// Load the routes
			var routes = require('./routes');
			_.each(routes, function(controller, route){
				app.use(route, controller(app, route));
			});

			console.log('Server running on port 3000...');
			app.listen(3000);
	});	
	}	
});

