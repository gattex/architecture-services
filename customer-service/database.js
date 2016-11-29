'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://gattex:gattex@ds113628.mlab.com:13628/ecommerce', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});