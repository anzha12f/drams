var mongoose = require('mongoose');

// Create the Schemas
// DramsSchema
var DramsSchema = new mongoose.Schema({
	dramId: {
		type: String,
		required: true
	},
	name: {
		type:String,
		required: true
	},
	picture: {
		type:String,
		required: true
	},
	dateAdd: {
		type: Date,
		required: true
	},
	tastingNote: {
		type:String,
		required: true
	},
	rating: {
		type:Number,
		required: true
	},
	
	price:{
		type: Number,
		required: true
	}

});

// Export it for outsiders
module.exports = DramsSchema;

