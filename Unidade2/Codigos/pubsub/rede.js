
PubSub.subscribe('usaCredenciais', function (msg, data) {

  console.log('Usa as seguintes credenciais:'+data.ID+'  '+data.password);

  const dados = new URLSearchParams();
  dados.append('ID', data.ID);
  dados.append('passwd', data.password);


  axios.post('http://localhost:10000/valida', dados)
  .then(function (response) {
    console.log(response.data);
    if (response.data=='falha')
      PubSub.publish('falhaCredenciais',{});

  })
  .catch(function (error) {
    console.log(error);
  });

});


PubSub.subscribe('init', function (msg, data) {

  console.log('Modulo REDE inicializado');

});