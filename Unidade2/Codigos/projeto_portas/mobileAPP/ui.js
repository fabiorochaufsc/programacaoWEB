
function O(id)
{
  return document.getElementById(id);
}
PubSub.subscribe('desconectou', function (msg, data) {
  O('salas').innerHTML='';

});


PubSub.subscribe('init', function (msg, data) {

    console.log('Modulo UI inicializado');

    O('botaoEnvia').addEventListener('click',function(){
        credenciais={id:'',password:''};
        credenciais.id = O('ID').value;
        credenciais.password= O('PASSWD').value;
        console.log(credenciais)
        PubSub.publish('login', {tipo:'login',id:credenciais.id, passwd:credenciais.password});
    },false);
  

});


PubSub.subscribe('salas', function (msg, data) {
    let btn = document.createElement("button");
    btn.innerHTML = "Sala "+data.salas;
    btn.addEventListener('click',function(){
      console.log('Solicita a abertura da sala '+data.salas)
      PubSub.publish('abre', {identificacaoPorta:data.salas});
    },false);
    O('salas').appendChild(btn);
});