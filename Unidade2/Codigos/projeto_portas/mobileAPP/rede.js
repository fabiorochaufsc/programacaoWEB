



var servidorWebserver= 'ws://localhost:10000'

var websocket


PubSub.subscribe('init', function (msg, data) {

    console.log('Modulo rede inicializado2');

    websocket = new ReconnectingWebSocket(servidorWebserver)
    websocket.onopen = function (evt) { 
      console.log('conectou');
      if (typeof(credenciais) != "undefined")        PubSub.publish('login', {tipo:'login',id:credenciais.id, passwd:credenciais.password});

     }
    websocket.onclose = function (evt) { 
      PubSub.publish('desconectou', {});
    }
    websocket.onmessage = function (evt) { 
      let msg = JSON.parse(evt.data);
      switch (msg.tipo)
      {
        case 'falhaLogin':
          console.log('falhaLogin');
           credenciais=undefined;
          break;
        case 'listaSalas':
          for (let a = 0 ; a< msg.salas.length; a++)
        {
            PubSub.publish('salas', {salas:msg.salas[a]});

       
  
        }
          break;

      }
  
      
      
  
  
  
     }
    websocket.onerror = function (evt) { 
      console.log('Erro desconhecido')
    }

});

PubSub.subscribe('login', function (msg, data) {
    websocket.send(JSON.stringify({tipo:'login',id:data.id,passwd:data.passwd}));
});

PubSub.subscribe('abre', function (msg, data) {
    websocket.send(JSON.stringify({tipo:'abre',identificacaoPorta:data.identificacaoPorta}));
});


