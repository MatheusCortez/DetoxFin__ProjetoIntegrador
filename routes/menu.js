var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/minhaCarteira',function(req,res,next){
    res.render('users/user/minhaCarteira/index')
  })
  router.get('/meusInvestimentos', function(req, res, next) {
    res.render('users/user/meusInvestimentos/main');
  });
  router.get('/graficos',function(req,res,next){
    res.render('users/user/graficos/main')
  })
  router.get('/perfilInvestidor',function(req,res,next){
    res.render('users/user/perfilInvestidor/main')
  })
  router.get('/cursos', function(req, res, next) {
    res.render('users/user/cursos/main');
  });
  router.get('/dadosDaConta',function(req,res,next){
    res.render('users/user/dadosDaConta/main')
  })
  router.get('/sair',function(req,res,next){
    res.render('index')
  });

module.exports=router;