const bcrypt = require ('bcrypt');
const fs= require('fs')
const bancoFake= require('../database/bancoFake')

/**POR FAVOR NAO MEXE NO CODIGO DE NEW USER PASSEI UMA SEMANA PRA FAZER RODA */



module.exports.newUser =   async function (req,res){
  const usuario = req.body
  if(usuario.senha===usuario.senhaConfirmada){
  hash =  await encriptarSenha(usuario.senha)
  bancoFake.cadastrar({
    nome:usuario.nome,
    email:usuario.email,
    hash
  })
    res.redirect('/users/auth')
  
  }else{
    res.render('users/new',{
      error:{
        senha:'Senhas incompativeis',
      },
      content:req.body
    })
  }





}


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
    res.render('users/new',{
      error:{},
      content:{}
    });
    
  }
 
  

  async function encriptarSenha(senha) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(senha,salt)
  
  }
  async function validarSenha(senha,hash){
    return await bcrypt.compare(senha,hash)
 
 }
 

