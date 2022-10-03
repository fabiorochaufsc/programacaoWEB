var express = require('express')
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
var DB;


app.use(express.static(__dirname + '/public'));
app.use(express.json())

MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, db) {
    DB = db.db("DB_Mapas");

});


app.get('/pegaTodas', function(req, res) {
    DB.collection('paradas_onibus').find().toArray(function (err, result) {
        if (err)
        {
          console.log("erro inserindo elemento")
        }
        else {
            var t=[];
            for (let a=0;a<result.length;a++)
            {
                t.push({desc:result[a].desc,lat:result[a].lat,lng:result[a].lng});
            }
           
            res.send(t)
        }
      })
});

app.post('/envia', function(req, res) {


    DB.collection('paradas_onibus').insertOne(req.body, function (err, res) {
        if (err)
        {
          console.log("erro inserindo elemento")
        }
        else {
          console.log('1 document inserted')
        }
      })
  
})



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
