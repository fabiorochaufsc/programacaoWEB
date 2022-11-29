var express     = require('express')
var app         = express();
var bodyParser  = require('body-parser');
var http = require('http')
var cors =  require ('cors');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/lista', function (req, resp) {
  resp.send(JSON.stringify({nome:'ana',end:'rua tupy 123'}));
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

app.listen(5000, function(){
  console.log('SERVIDOR WEB na porta 5000');
});


