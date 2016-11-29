var amqp = require('amqplib/callback_api');



module.exports.sendMessage = function(message){
	amqp.connect('amqp://itlbjbfi:6Y1Fe1BYeGbwYBveKv2c-LerMr3FD_en@reindeer.rmq.cloudamqp.com/itlbjbfi', function(err, conn) {
		if (err){
			return;
		}
		console.log("Estoy adentro")
  		conn.createChannel(function(err, ch) {
  			var queue = 'customers';
  			if (err){
				return;
			}
		    ch.assertExchange(queue, 'fanout', {durable: false});
		    ch.publish(queue, '', new Buffer(message));
	    	console.log("[Message Sent] " + message);
  		});
  		setTimeout(function() { conn.close(); process.exit(0) }, 1000);
	});
}
