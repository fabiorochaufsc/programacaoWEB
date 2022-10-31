const PORTA=3000;

var express        = require ('express');
var jwt = require('jsonwebtoken');
var bodyParser     = require ('body-parser')
var methodOverride = require ('method-override');

var app = express();
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname + '/public'));
app.use('/',require('./routes'));

app.use(function(err,request,response,next){
	next(err);
});

app.use(function(err,request,response,next){
	response.status(err.status || 500).json({err:err.message});
});

app.listen(PORTA,function(){
   console.log('servidor rodando. Atendendo requisições na porta '+PORTA)
});
