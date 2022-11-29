const WebSocket = require("ws").Server;
const HttpsServer = require('https').createServer;
const fs = require("fs");

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

server = HttpsServer({
    cert: fs.readFileSync(options.cert),
    key: fs.readFileSync(options.key)
})
socket = new WebSocket({
    server: server,port:5000
},function (){
	console.log('rodando');
});

var vetor_conexoes=[];
socket.on('connection', function connection(ws) {

  vetor_conexoes.push(ws);
  console.log("Cliente se conectou");

  ws.on('message', function incoming(message) {
   var m = JSON.parse(message)
    console.log('aqui',m)
    switch (m.tipo)
    {
      case 'login':
              console.log("Recebeu mensagem de login");
              ws.LOGIN = m.conteudo;
                break;
      case 'texto':
                    console.log("Recebeu mensagem de texto");

            for (var a=0; a<vetor_conexoes.length;a++)
            {
             try {
              var obj = {origem:ws.LOGIN,conteudo:m.conteudo}
              vetor_conexoes[a].send(JSON.stringify(obj));
             }
              catch (e)
              {

              }
            }
    }

    
  });

});
