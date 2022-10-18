var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
var ObjectId = require('mongodb').ObjectId; 

var express     = require('express')
var app         = express();
var CachemanRedis = require('cacheman-redis');
var cache = new CachemanRedis('redis://127.0.0.1:6379');
app.use(express.static(__dirname + '/public'));

cache.clear(function (err) {
  if (err) throw err;
  // cache is now clear
});

var dbo;

function pesquisaID (id,cb){
  console.log('zzzzzzzzzzzzzzzzz'+id)
  dbo.collection('defesas').find({_id: new ObjectId(id)}).toArray(function (err, result) {
    if (err) throw err
    else
    {
          return cb(null,result)

          
          
     }
  
     return cb(null,'')
    })
}

 function pesquisaDB (cb)
{
  let saida=[]
  dbo.collection('defesas').find().toArray(function (err, result) {
  if (err) throw err
  else
  {

    for (var a=0; a<result.length;a++ )
        saida.push({_id:result[a]._id,title:result[a].title,nome:result[a].student[0],orientador:result[a].orientador});
        
   }

   return cb(null,saida)
  })
}

MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, db) {
  if (err) throw err
  var query = { nome: 'Fabio Rocha' }
   dbo = db.db("DB_TCC");

  
})

/*
app.get('/defesa',function(req,resp) {
  let id =req.query.id;
  if (cache.get('defesa'+id,function (err, value) {


  console.log('pesquisa o ID='+id)
  pesquisaID(id,function(err,dados){
    resp.send(dados)
  });
});*/




app.get('/defesa',function(req,resp) {
  let id =req.query.id;
if (cache.get('defesa'+id,function (err, value) {
  if (err) throw err;

  if (value==null)
  {
    console.log('sem cache - le do banco de dados')
    pesquisaID(id,function(err,dados){
      resp.send(dados);
      cache.set('defesa'+id,dados,30);

    });
    
  }
  else {
    console.log('achou no cache');
    resp.send(value);
  }

 } ));



});


app.get('/listaDefesas', function (req, resp) {
  saida= []

  if (cache.get('listaDefesas',function (err, value) {
    if (err) throw err;
  
    if (value==null)
    {
      console.log('sem cache - le do banco de dados')
      pesquisaDB(function(err,dados){
        resp.send(dados);
        cache.set('listaDefesas',dados,30);

      });
      
    }
    else {
      console.log('achou no cache');
      resp.send(value);
    }

   } ));

  
 
});



app.get(/^(.+)$/, function (req, res) {
  try {
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