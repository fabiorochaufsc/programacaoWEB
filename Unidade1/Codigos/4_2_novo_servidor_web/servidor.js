var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

var valor=0;
var alunos=[{matricula:123,nome:'joao'},{matricula:456,nome:'maria'}];


app.get('/alunos',function(req, resp) {

    console.log('lista todos os alunos');
    
    resp.send(alunos);
    return resp.end();
});

app.get('/alunos/:matricula', function(req, resp) {
   console.log('Pesquisa por apenas um aluno');
   var matricula = req.params.matricula;
   for (var a=0;a<alunos.length;a++)
   {
    if (alunos[a].matricula==matricula)
    {
        // achou
         resp.send(alunos[a]);
         return resp.end();
    }
   }
   resp.end();
});

///  http://localhost:3000/sensores?temperatura=123
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
