var express = require('express');
var app = express();

app.post('/mail/send', function (req, res, next) {
	res.send("Mail Sent");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});