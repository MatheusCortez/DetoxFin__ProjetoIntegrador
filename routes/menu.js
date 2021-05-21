var express = require('express');
var router = express.Router();
const {showMinhaCarteira,
      showInvestimentos,
      showGraficos,
      showPerfilInvestidor,
      showCursos,
      showDadosConta,
      logout
      } = require('../controllers/menuLateral.controlle')
/* GET users listing. */
  router.get('/minhaCarteira',showMinhaCarteira)

  router.get('/meusInvestimentos',showInvestimentos);

  router.get('/graficos',showGraficos)

  router.get('/perfilInvestidor',showPerfilInvestidor)

  router.get('/cursos',showCursos);

  router.get('/dadosDaConta',showDadosConta)

  router.get('/sair',logout);

module.exports=router;