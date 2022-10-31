
// Crie uma conta free no servico SendInBlue e crie uma chave de acesso
// Modifique a chave abaixo e atualize os dados do email (mensagem, to, from, etc.)

 
var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = 'SUA CHAVE';

new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
  {
    'subject':'Mensagem Fake',
    'sender' : {'email':'novoprofessor@ufsc.br ', 'name':'Novo professor'},
    'replyTo' : {'email':'novoprofessor@ufsc.br ', 'name':'Novo professor'},
    'to' : [{'name': 'Fábio Rodrigues de la Rocha', 'email':'fabio.rocha@ufsc.br'}],
    'htmlContent' : 'Essa mensagem é Fake',
    'params' : {'bodyMessage':'Made just for you!'}
  }
).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});