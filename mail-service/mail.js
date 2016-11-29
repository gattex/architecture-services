var express = require('express');
var app = express();
var rabbit = require('./rabbitMQ');

app.post('/mail/send', function (req, res, next) {
	res.send("Mail Sent");
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

process.on('uncaughtException', function (err) {
	console.error(err);
	console.log("Node NOT Exiting...");
});