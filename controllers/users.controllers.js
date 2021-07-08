const hash = require ('../controllers/crypFunctions/hash')
const db= require('../database/db')


  module.exports.Auth =  async (req,res)=>{
    const login = req.body;
    const usuarioCadastrado = await db.buscarUsuario(login)
    const resultadoSenha = await hash.compareHash(login.password,usuarioCadastrado.senha)
    
    if(!usuarioCadastrado || !resultadoSenha){
      res.render('users/auth',{
        error:{
          email:'email ou senha invalido'
        },
        content:req.body
      })
    
    }else{
      req.session.usuario = usuarioCadastrado
      req.session.id=usuarioCadastrado.id

      res.redirect('/user/minhaCarteira/')
    }
      
    }

  
  
  module.exports.newUser =   async  (req,res)=>{
    const usuario = req.body
    
    const usuarioCadastrado = await db.buscarUsuario(usuario);
    console.log(usuarioCadastrado)
    const CPFcadastrado = await db.buscarCPF(usuario); 
    if(CPFcadastrado){
      res.render('users/new',{
        error:{
          cpf:'CPF já cadastrado'
        },
        content:usuario
      })
    } else
    if(usuarioCadastrado){
      res.render('users/new',{
      error:{
        email:'Email já cadastrado',
  

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
      db.cadastrar(usuario)
        res.redirect('/users/auth')
         
  
  }

  }
  
  

  module.exports.update= async(req,res)=>{
    const usuario = req.body;
    const {id} = usuarioCadastrado
  }











