/*
	Exporta apenas uma funcao
	forma de usar:
	var hello = require ('./hello.js');
	hello('oi mundo');
*/

function func1 (nome)
{
	console.log('nome='+nome);
}

function func2 (nome, sobrenome)
{
	console.log('nome completo='+nome+' '+sobrenome);
}


module.exports = {func1,
func2};
