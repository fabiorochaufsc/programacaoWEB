var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

 var alunos=[{nome:'Joao', idade:21, CPF:'1235322', cidade:'Araranguá'},{nome:'Maria',idade:23,CPF:'234236533',cidade:'Florianópolis'},{nome:'Pedro',idade:26,CPF:'6535677',cidade:'São José'}];
 
 

app.get('/', function(req, resp) {
    console.log('Dentro da primeira parte');
    resp.send('<H1>oi mundo</H1>');
});

app.get('/listaAlunos', function(req, resp) {
	resp.send(alunos);
});


app.get(/^(.+)$/, function(req, res) {
    try {
        res.write("A pagina que vc busca nao existe")
        res.end();
    } catch (e) {
        res.end();
    }
})

app.listen(3000, function() {
    console.log("servidor no ar");
});
