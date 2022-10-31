var express        = require ('express');
var moment         = require ('moment');

var jwt            = require('jsonwebtoken');
var segredo = "123";
var router  = express.Router();
function auth(req, res, next){

    var token = req.headers['x-access-token'];
	 if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, segredo, function(err, decoded) {
      if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.username = decoded.username;
      
      next();
    });

}

router.get('/teste',auth,function (request, response, next) {

  console.log("Usuario "+request.username+" acessou o recurso teste");
	response.json({'msg':'permitido'})
});

    
router.get('/logout', auth, function(req, res) {
  res.status(200).send({ auth: false, token: null });
});
    
router.post('/login',function (req, res, next) {
	console.log('recebeu login');
	console.log(req.body);
    if(req.body.username === 'frr' && req.body.password === 'frr'){
      //auth ok
      console.log('autorizado');
      var id = req.body.username; 
      var token = jwt.sign({ username:id }, segredo, {expiresIn: 10 });
      return res.json({ auth: true, token: token });
    }
    else {
          console.log('NAO autorizado');
    res.status(401).json({message: 'Login inválido!'});
    }


});




module.exports = router;
