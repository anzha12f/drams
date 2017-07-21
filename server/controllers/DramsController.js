//Get dependency of node-restful to create REST API for Drams
// Model.
var restful = require('node-restful');

module.exports = function(app, route) {

// Here setting up the controller for REST
var rest = restful.model(
	'Drams',
	app.models.Drams
	).methods(['get', 'put', 'post', 'delete']);

// Register injection with rest object
rest.register(app, route);

// return it 
return function(req, res, next){
	next();
  };
};