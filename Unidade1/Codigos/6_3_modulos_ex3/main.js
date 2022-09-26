
var Meu = require('./outro.js');

console.log('antes');
var meu = new Meu();
console.log('depois')

// ou ainda 
// var meu = new (require('./outro.js'));
//


meu.metodo1('Olá pessoal!');
meu.metodo2('Olá pessoal!');

