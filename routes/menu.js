var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/minhaCarteira',function(req,res,next){
    res.render('users/user/index')
  })
  router.get('/meusInvestimentos', function(req, res, next) {
    res.render('users/user/meusInvestimentos');
  });
  router.get('/graficos',function(req,res,next){
    res.render('users/user/graficos')
  })
  router.get('/perfilInvestidor',function(req,res,next){
    res.render('users/user/perfilInvestidor')
  })
  router.get('/cursos', function(req, res, next) {
    res.render('users/user/cursos');
  });
  router.get('/dadosDaConta',function(req,res,next){
    res.render('users/user/dadosDaConta')
  })
  router.get('/sair',function(req,res,next){
    res.render('index')
  });

module.exports=router;