var amqp = require('amqplib/callback_api');

amqp.connect('amqp://itlbjbfi:6Y1Fe1BYeGbwYBveKv2c-LerMr3FD_en@reindeer.rmq.cloudamqp.com/itlbjbfi', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'customers';

    ch.assertExchange(ex, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      console.log("[Messages] Waiting for messages in %s", q.queue);
      ch.bindQueue(q.queue, ex, '');

      ch.consume(q.queue, function(msg) {
        console.log("[Messages Received] %s", msg.content.toString());
      }, {noAck: true});
    });
  });
});