var express     = require('express')
var app         = express();
var bodyParser  = require('body-parser');
var http = require('http')
var serial = require('serialport');

app.use(express.static(__dirname + '/public'));

var serial = new serial('/dev/ttyUSB0', {
 
  baudRate: 9600
});

app.get('/botao/:id', function (req, resp) {
  var id = req.params.id;
  serial.write(id);
  console.log('botao functionou')
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


