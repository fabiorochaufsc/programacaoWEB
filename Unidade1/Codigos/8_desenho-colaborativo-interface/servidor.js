var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 10000 },function (){
  console.log('SERVIDOR WEBSOCKETS na porta 8080');
});

vetClientes=[];

wss.on('connection', function connection(ws) {
  vetClientes.push(ws);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    for (var a=0;a < vetClientes.length;a++)
    {
      vetClientes[a].send(message);
    }

  });

  ws.send(JSON.stringify({tipo:'texto',valor:'funciona'}));
});



app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));





app.get(/^(.+)$/, function (req, res) {
  try {
    res.write("A pagina que vc busca nao existe")
    res.end();
  }
  catch(e)
  {
    res.end();
  }    
})

app.listen(3000, function(){
  console.log('SERVIDOR WEB na porta 3000');
});
