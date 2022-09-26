var express = require('express')
var app = express();



///  http://localhost:4000/sensores?temperatura=123&humidade=45&id=66
app.get('/', function(req, resp) {

    resp.end('<html lang="pt-BR">\
    <head>  <meta charset="utf-8"> </head>\
    <body>\
    <table>\
    <tr> <td>João </td </tr>\
    <tr> <td>Maria </td </tr>\
    <tr> <td>Pedro </td </tr>\
    </table>\
    </body>\
    </html>');
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
