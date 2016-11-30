var rabbit = require('./rabbitMQ');


process.on('uncaughtException', function (err) {
	console.error(err);
	console.log("Node NOT Exiting...");
});