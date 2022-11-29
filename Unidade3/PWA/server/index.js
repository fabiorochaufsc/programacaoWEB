var express     = require('express')
var app         = express();
var bodyParser  = require('body-parser');
var http = require('http')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '../../public'));
app.get('/', function (req, resp) {
  resp.write("teste");
  resp.end();
});

///  http://localhost:3000/FCM?id=123
app.post('/FCM', function (req, resp) {

  console.log(req.body);
  let id     = req.query.nome;
  let endereco = req.query.endereco;
  console.log('recebido:'+id+'  '+endereco);
  return resp.end();
});



app.get(/^(.+)$/, function (req, res) {
  try {
  	console.log('teste')
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


