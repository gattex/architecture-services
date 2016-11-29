'use strict';

var mongoose = require('mongoose')
	,Schema = mongoose.Schema;

var customerSchema = new Schema({
	name: String,
	email: String,
	age: String
}, { collection : 'Customers' });

var model = mongoose.model('Customer', customerSchema);

module.exports = model;
