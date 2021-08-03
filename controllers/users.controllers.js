const hash = require ('../controllers/crypFunctions/hash')
const db= require('../database/db')


  module.exports.Auth =  async (req,res)=>{
    const login = req.body;
    const usuarioCadastrado = await db.buscarUsuario(login)
    const resultadoSenha = await hash.compareHash(login.senha,usuarioCadastrado.senha)
    
    if(!usuarioCadastrado || !resultadoSenha){
      res.render('pages/externas/auth',{
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
      res.render('pages/externas/new/index',{
        error:{
          cpf:'CPF já cadastrado'
        },
        content:usuario
      })
    } else
    if(usuarioCadastrado){
      res.render('pages/externas/new/index',{
      error:{
        email:'Email já cadastrado',
  

      },
      content:usuario
     })
      
    }else if(usuario.senha!=usuario.senhaConfirmada){
      res.render('pages/externas/new/index',{
        error:{
          senha:'Senhas não conferem',
        },
        content:req.body
      })
    }
    else{
      db.cadastrar(usuario)
        res.redirect('auth')
         
  
  }

  }
  
  
module.exports.updateUser = async(req,res)=>{

}











