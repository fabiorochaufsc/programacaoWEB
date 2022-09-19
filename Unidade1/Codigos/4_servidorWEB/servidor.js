var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
    console.log('Dentro da primeira parte');
    resp.send('<H1>oi mundo</H1>');
});

app.get('/hora', function(req, resp) {
  console.log(req.query.id);


	var d = new Date();
    console.log('Dentro da primeira da hora');
    resp.write(d.toString());
    resp.end();
});

///  http://localhost:4000/sensores?temperatura=123&humidade=45&id=66
app.get('/sensores', function(req, resp) {

    //console.log(req);
    var temperatura = req.query.temperatura;
    var humidade = req.query.humidade;
    var id = req.query.id;

    if (id) console.log('identificacao=', id);
    if (temperatura) console.log('temperatura=', temperatura)
    if (humidade) console.log('humidade=', humidade)

	resp.send("fim da mensagem\n");
    return resp.end();
});



app.get(/^(.+)$/, function(req, res) {
    try {
        res.write("A pagina que vc busca nao existe")
        res.end();
    } catch (e) {
        res.end();
    }
})

app.listen(4000, function() {
    console.log("servidor no ar");
});
