const {v4:uuidV4} = require('uuid')
const {createHash,compareHash} = require('./crypFunctions/hash')

const fs= require('fs')
const bancoFake= require('../database/bancoFake')
const usuarioJS = require('../database/usuarios.json')


module.exports.showIndex = function(req,res){
  res.render('index')
}


module.exports.showAuth = function(req,res,next){
    res.render('users/auth',{
      error:{},
      content:{}
    })

  } 
  module.exports.Auth =  async (req,res)=>{
    const login = req.body;
    const usuario = await bancoFake.buscarUsuario(login.email)
    
    req.session.usuario = usuario
    if(!usuario){
      res.render('users/auth',{
        error:{
          email:'email ou senha invalido'
        },
        content:req.body
      })
    
    }else{
     
      res.redirect('/user/minhaCarteira')
    }
      
    }




module.exports.showRecoveryPass =function(req,res,next){
  res.render('users/recoverypass',)
}




  
  module.exports.showNew = function(req,res,next){
    
    res.render('users/new',{
      error:{},
      content:{}
    });
    
  }
 
  module.exports.newUser =   async function (req,res){
    const usuario = req.body
    const usuarioCadastrado = await bancoFake.buscarUsuario(usuario.email)
   
    if(usuarioCadastrado && usuario.senha!=usuario.senhaConfirmada){
      console.log('passou')
      res.render('users/new',{
      error:{
        email:'Email já cadastrado',
        senha:'Senhas não conferem'

      },
      content:usuario
     })
      
    }else if(usuario.senha!=usuario.senhaConfirmada){
      res.render('users/new',{
        error:{
          senha:'Senhas não conferem',
        },
        content:req.body
      })
    }
    else{
      bancoFake.cadastrar({
        id:uuidV4(),
        nome:usuario.nome,
        email:usuario.email,
        hash: await createHash(usuario.senha)
      })
        res.redirect('/users/auth')
         
  
  }

    }
    
    
 


  module.exports.showInternalIndex =function(req,res,next){
   console.log('entrou  na retorra index')
    res.render('/user/minhaCarteira')
   
}