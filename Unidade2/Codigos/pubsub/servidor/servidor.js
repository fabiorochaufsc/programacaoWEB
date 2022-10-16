var express = require('express')
var app = express();
const bodyParser = require("body-parser");
var cors = require('cors');

var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(urlencodedParser)
app.use(cors())

app.post('/valida',urlencodedParser, function (req, resp) {
    console.log(req.body);
    console.log("ID= "+req.body.ID);
    console.log('passwd= '+req.body.passwd);
    if (req.body.ID=='frr' && req.body.passwd=='teste123')
        resp.send('sucesso');
    else resp.send('falha');
    
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

app.listen(10000, function() {
    console.log("servidor no ar");
});
