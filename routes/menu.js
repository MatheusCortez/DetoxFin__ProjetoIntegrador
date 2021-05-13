var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/minhaCarteira',function(req,res,next){
    res.render('users/index')
  })
  router.get('/meusInvestimentos', function(req, res, next) {
    res.render('users/meusInvestimentos');
  });
  router.get('/graficos',function(req,res,next){
    res.render('users/graficos')
  })
  router.get('/perfilInvestidor',function(req,res,next){
    res.render('users/perfilInvestidor')
  })
  router.get('/cursos', function(req, res, next) {
    res.render('users/cursos');
  });
  router.get('/dadosDaConta',function(req,res,next){
    res.render('users/dadosDaConta')
  })
  router.get('/sair',function(req,res,next){
    res.render('index')
  })
module.exports=router;