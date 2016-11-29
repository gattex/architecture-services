var express = require('express');
var app = express();
var db = require('./database');
var Customer = require('./customer');
var parser = require('body-parser');


app.use(parser.json());

app.post('/customer/create', function (req, res, next) {


  var miCustomer = new Customer();
  miCustomer.name = req.body.name;
  miCustomer.age = req.body.age;
  miCustomer.email = req.body.email;
  miCustomer.save().then(function(){
  	res.send('ok');	
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});