
var eventEmitterBanana = require('./compartilha.js');



function tratador2 ()
{
  console.log('evento alarme no outro.js');
}


function MeuObjeto () {
  console.log('ESTOU AQUI')

  // usando a chamada da funcao
  eventEmitterBanana.on('alarme', tratador2);

  // usando o corpo da funcao diretamente
  eventEmitterBanana.on('fogo', function (intensidade) {
    if (intensidade) // o evento foi recebeu intensidade como parâmetro
    {
      console.log('fogo de intensidade '+intensidade)
    }
    console.log('evento fogo no outro.js');

  })
  



}

MeuObjeto.prototype.metodo1 = function (x)
{
	console.log('chamou o modulo1:'+x);
}

MeuObjeto.prototype.metodo2 = function (x)
{
	console.log('chamou o modulo2:'+x);
}

module.exports = MeuObjeto;

