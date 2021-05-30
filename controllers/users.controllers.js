const bcrypt = require ('bcrypt');
const fs= require('fs')
const bancoFake= require('../database/bancoFake')

module.exports.showIndex = function(req,res){
  res.render('index')
}


module.exports.showAuth = function(req,res,next){
    res.render('users/auth')

  } 

module.exports.showRecoveryPass =function(req,res,next){
  res.render('users/recoverypass')
}


module.exports.Auth =  async (req,res)=>{
const login = req.body;
const usuario = await bancoFake.buscarUsuario(login.email)

if(!usuario){
  console.log('nao localizado')
  
}else{

  console.log('localizou')
  res.redirect('/user/minhaCarteira')
}
  
}

module.exports.showInternalIndex =function(req,res,next){
    res.render('/user/minhaCarteira')
}
  
  module.exports.showNew = function(req,res,next){
    res.render('users/new')

  }
 
  module.exports.newUser =   async function(req,res){
    const usuario= req.body;  
    console.log(usuario)
   await bancoFake.cadastrar(usuario)
 
  res.render('users/auth')
  }


  async function encriptarSenha(senha) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(senha,salt)
  
  }
    

