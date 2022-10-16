

exports.validaUsuario = function(dbo, id, passwd,cb) {

    dbo.collection('users').findOne({ _id: id },function (err, result) {
        console.log('valida usuario '+result+' '+id);
        console.log(id+'   '+passwd)
        if (result==undefined) return cb('Usuario nao existe')
        if (result.password==passwd) return cb(null,{status:'usuario validado',portas:result.portas})
        else return cb('Senha invalida')
         
      })
};








