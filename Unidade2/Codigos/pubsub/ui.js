function O (id)
  {
    return document.getElementById(id)
  }

PubSub.subscribe('init', function (msg, data) {

  console.log('Modulo UI inicializado');

});


PubSub.subscribe('falhaCredenciais', function (msg, data) {
  O('areaCredenciais').style.display='block';
});

PubSub.subscribe('usaCredenciais', function (msg, data) {
  console.log('esconde as credenciais');
  O('areaCredenciais').style.display='none';
});


  O('credenciais').addEventListener('click', function() {
      let i = O('id').value;
      let p = O('password').value;
      
      PubSub.publish('insereCredenciais', {ID:i,password:p});

  },false);