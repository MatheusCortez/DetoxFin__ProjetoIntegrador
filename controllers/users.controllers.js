const bcrypt = require ('bcrypt')
module.exports.showIndex= function(req,res){
    res.render('index')
}
module.exports.showNew = function(req,res,next){
    res.render('users/new')
  }

  function criptografarsenha(senha){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(senha,salt)
  }
  function salvarObjeto(objeto){

    const usuariosSalvos = fs.readFileSync('arquivo.json')
    const obj = JSON.parse(usuariosSalvos)
    
    obj.push(objeto)
    const str =JSON.stringify(obj) 
     fs.writeFileSync('arquivo.json',str)
  }
  module.exports.newUser = function  (req,res,next){
    const dados =req.body    
     const {senha,senhaConfirmada }= req.body
   
     if(senha === senhaConfirmada){ 
       const criptosenha =criptografarsenha(senha)
       console.log(criptosenha)
       req.body.senha = criptosenha
       req.body.senhaConfirmada = null
     res.redirect('/users/teste')
     salvarObjeto(dados) 
     }else{
      next()
     }
 }


module.exports.showAuth = function(req,res,next){
    res.render('users/auth')
} 

module.exports.Auth = function(req,res,next){
    res.render('/users/index',{usuarios:require('../arquivo.json')})
  
  }

module.exports.showInternalIndex =function(req,res,next){
    res.render('users/user/index')
  }

module.exports.showRecoveryPass =function(req,res,next){
    res.render('users/recoverypass')
  }