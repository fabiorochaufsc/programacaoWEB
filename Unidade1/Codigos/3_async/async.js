var fs = require('fs');

function roda (err, out){
	console.log('valor de dentro'+i);

};

function teste ()
{
	for(let i = 1; i <= 5; i++) {
		var file = "async-txt" + i + ".txt";
		fs.writeFile(file, "Hello Node.js!", roda);
		console.log(i);
	}


}

teste();
