/*
	Exporta apenas uma funcao
	forma de usar:
	var hello = require ('./hello.js');
	hello('oi mundo');
*/
function hello (msg)
{
	console.log(msg)
}

/*
 Ou usando uma arrow function
const hello = (msg) =>{
	console.log(msg)
};
*/

module.exports = hello;
