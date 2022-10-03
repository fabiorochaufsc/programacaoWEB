
// node simula_app MAC CHAVE ENERGIA_PRODUZIDA ENERGIA_CONSUMIDA



if (process.argv.length != 6)
{
    console.log('forma de usar:')
    console.log('node simula_app MAC CHAVE ENERGIA_PRODUZIDA ENERGIA_CONSUMIDA');
    process.exit();
}

let dados={};
dados.mac               = process.argv[2];
let chave               = process.argv[3];
dados.energia_produzida = process.argv[4];
dados.energia_consumida = process.argv[5];
dados.timestamp         = Date.now();

var SHA256 = require("crypto-js/sha256");

dados.chave = chave;
let hash = SHA256 (JSON.stringify(dados)).toString();;

let pacote={hash:hash,dados:dados};


console.log('pacote ='+JSON.stringify(pacote));
delete dados.chave;


var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    connection.send(JSON.stringify(pacote));  
});

client.connect('ws://localhost:10000/');