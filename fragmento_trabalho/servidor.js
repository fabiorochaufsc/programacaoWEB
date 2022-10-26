const WebSocket = require('ws');
var express = require('express')
var app = express();



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
  console.log('SERVIDOR WEB na porta 3000. O cliente precisa acessar via browser http://[IP]:3000 para acessar a aplicacao');
});



const wss = new WebSocket.Server({ port: 8000 },function (){
	console.log('O servidor de websockets esta rodando na porta 8000');
});

var clientesOnline=[];
wss.on('connection', function connection(ws) {


  ws.on('message', function incoming(message) {
   var m = JSON.parse(message)

    switch (m.tipo)
    {
      case 'login':
              if ((m.id=='aluno') && (m.passwd=='aluno'))
              	{
              		// sucesso
              		ws.login = m.id;
              		ws.send(JSON.stringify({tipo:'login',valor:'sucesso'}));
	                clientesOnline.push(ws);
	                console.log('Cliente aceito. Atualmente existem '+clientesOnline.length+' cliente(s) online');
              		
              	}
              else
              {
              	ws.send(JSON.stringify({tipo:'login',valor:'falha'}));
              	  		              console.log("Recebeu mensagem de login:recusado");
              	  		              ws.close();
              }
              break;

                  
    }

    
  });
  ws.on('close', function (code) {

		  for (let x=0;x<clientesOnline.length;x++)
      {
        if (clientesOnline[x]==ws) {
            clientesOnline.splice(x, 1);
            break;
        }
      }

                console.log('Cliente desconectou. Atualmente existem '+clientesOnline.length+' cliente(s) online');


  });

});
