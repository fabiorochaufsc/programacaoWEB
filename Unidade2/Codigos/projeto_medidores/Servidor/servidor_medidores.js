const WebSocket = require('ws');   
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
var SHA256 = require("crypto-js/sha256");

var dbo;







const wss = new WebSocket.Server({ port: 10000 },function (){
	MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, db) {
		if (err) throw err
		 dbo = db.db("medidoresDB");
		console.log('Servidor rodando...')
		
	  })
	
});


wss.on('connection', function (ws) {

  ws.on('message', function incoming(message) {
		let pacote = JSON.parse(message)

		let dadosRecebidos;
		let hashRecebido;

		dadosRecebidos=pacote.dados;
		hashRecebido  =pacote.hash;

		dbo.collection('medidores').findOne({ _id: pacote.dados.mac },function (err, result) {
			if (result==undefined) return;

			let chaveDB = result.chave;
			dadosRecebidos.chave = chaveDB;
			console.log('Dados Recebidos = '+JSON.stringify(dadosRecebidos));
			
			let hashCalculado = SHA256 (JSON.stringify(dadosRecebidos));
			

			if (hashCalculado==hashRecebido)
			{
				console.log('mensagem recebida sem erros');
			}
			else console.log('mensagem descartada por adulteração');
			ws.close();
			
			 
		  })		


  });



});


