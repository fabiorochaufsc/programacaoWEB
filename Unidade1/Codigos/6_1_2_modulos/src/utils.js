/*
	Exporta apenas uma funcao
	forma de usar:
	var utils = require ('./utils.js');
	utils.forma('joao','silva');
	uitls.hello('oi mundo');
*/
function hello (msg)
{
	console.log(msg)
}

function forma (nome, sobrenome)
{
	console.log('result:'+nome+'  '+sobrenome);
}

/*
 Ou usando uma arrow function
const hello = (msg) =>{
	console.log(msg)
};
*/

module.exports = {
	hello,
	forma
};
