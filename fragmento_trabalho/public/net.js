

// Modulo de comunicacao via websockets 

var servidorWebserver= 'ws://localhost:8000'

var websocket

function enviaLogin(id,passwd)
{
    websocket.send(JSON.stringify({tipo:'login',id:id,passwd:passwd}));	
}

function fazLogout()
{
	try{
		websocket.close();
	}catch(e)
	{
	}
}

function startConnection (id,passwd) {
  websocket = new ReconnectingWebSocket(servidorWebserver)
  websocket.onopen = function (evt) {
  	     
  	    enviaLogin(id,passwd);
  }
  websocket.onclose = function (evt) { onClose(evt) }
  websocket.onmessage = function (evt) { onMessage(evt) }
  websocket.onerror = function (evt) { onError(evt) }
}


function onClose (evt) {
}

function onMessage (evt) {
  var msg = evt.data
  msg = JSON.parse(msg);
  console.log(msg)
  
  switch (msg.tipo){
  	case 'login':
  		if (msg.valor=='sucesso')
  		{
  			mostra("tela-mostra-menu");
  		}
  		else
  		{
  			mostra("tela-falha");
  			websocket.close();
  			setTimeout (function(){
  				  			mostra("tela-login");
  			},3000);
  		}
  }


}



function onError (evt) {
  console.log(evt)
}


