var express = require('express');
var app = express();
var parser = require('body-parser');
var request=require('request');



app.use(parser.json());

app.get('/customer/get', function (req, res, next) {
  
  request.post('http://customer:3000/customer/status',function(err,res2,body){
      res.send("Volvio " + body);
  });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

process.on('uncaughtException', function (err) {
	console.error(err);
	console.log("Node NOT Exiting...");
});