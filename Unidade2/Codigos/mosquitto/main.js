var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  console.log('Conectou no servidor local Mosquitto')


})

client.subscribe('temperatura');
client.subscribe('alerta');


client.on('message', function (topic, message) {
  // message is Buffer
  console.log('recebeu msg do topico:'+topic)
  console.log(message.toString())
  client.end()
})


setTimeout(function(){

  client.publish('temperatura', '30.23')
},3000);