const express = require('express');
const router = express.Router();
const usersControlers = require('../controllers/users.controllers')
const fs = require('fs')
const bcrypt = require('bcrypt');


//rota index
router.get('/',(req,res)=>{
  res.render('index')
})
//rota nova get
router.get('/new',function(req,res,next){
  res.render('users/new')
})
//rota nova post com confirmacao de senha
router.post('/new',(req,res,next)=>{
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
})

router.get('/teste',(req,res,next)=>{
  res.render('users/teste',{usuarios:require('../arquivo.json')})
})



router.get('/auth',function(req,res,next){
  res.render('users/auth')
})

router.get('/user/index',function(req,res,next){
  res.render('users/user/index')
})

//FUNCAO PARA SALVAR OBJETO
function salvarObjeto(objeto){

  const usuariosSalvos = fs.readFileSync('arquivo.json')
  const obj = JSON.parse(usuariosSalvos)
  
  obj.push(objeto)
  const str =JSON.stringify(obj) 
  fs.writeFileSync('arquivo.json',str)
}
// FUNCAO PARA CRIPTOGRAFAR A SENHA 
function criptografarsenha(senha){
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(senha,salt)
}



module.exports = router;
