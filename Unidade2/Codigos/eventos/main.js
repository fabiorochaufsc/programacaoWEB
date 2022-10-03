var eventEmitterMaca = require('./compartilha.js');
var Meu = require('./outro.js');
var meu = new Meu();

function tratador1 ()
{
  console.log('recebeu alarme no main.js');
}

eventEmitterMaca.on('alarme', tratador1);

setInterval(function(){
  eventEmitterMaca.emit('alarme');
},5000)


setInterval(function(){
  //eventEmitterMaca.emit('fogo');
  // Tambem é possível disparar um evento e passar informações
  // neste exemplo, seria a intensidade do fogo
  eventEmitterMaca.emit('fogo', 80)

},7000)

