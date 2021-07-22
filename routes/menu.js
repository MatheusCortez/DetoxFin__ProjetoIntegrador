var express = require('express');
var router = express.Router();
const {showMinhaCarteira,
      showInvestimentos,
      showGraficos,
      showPerfilInvestidor,
      showCursos,
      showDadosConta,
      showDadosContaForm,
      logout
      } = require('../controllers/menuLateral.controller')
/* GET users listing. */
  router.get('/minhaCarteira',showMinhaCarteira)

  router.get('/meusInvestimentos',showInvestimentos);

  router.get('/graficos',showGraficos)

  router.get('/perfilInvestidor',showPerfilInvestidor)

  router.get('/cursos',showCursos);

  router.get('/dadosDaConta',showDadosConta)
  
  router.get('/dadosDaConta/form',showDadosContaForm)


  router.get('/sair',logout);

module.exports=router;
