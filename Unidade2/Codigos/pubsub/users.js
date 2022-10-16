
PubSub.subscribe('init', function (msg, data) {

    console.log('Modulo users inicializado');
    a = localStorage.getItem('credenciais');
    if (a)
    {
        console.log(a);
        PubSub.publish('usaCredenciais',JSON.parse(a));
    }
    else console.log('Nao existe dado')
  
  });


  PubSub.subscribe('falhaCredenciais', function (msg, data) {
    localStorage.removeItem('credenciais');
  });
PubSub.subscribe('insereCredenciais', function (msg, data) {

    console.log('Modulo users recebeu a mensagem:',data.ID,'  ',data.password);

    localStorage.setItem('credenciais', JSON.stringify(data));
    PubSub.publish('usaCredenciais',data);


  
  });