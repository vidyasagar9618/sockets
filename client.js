const { Kafka } = require('kafkajs')

exports.kafaka=new Kafka({
    clientId: 'my-app',
    brokers:['localhost:9092'],
})

