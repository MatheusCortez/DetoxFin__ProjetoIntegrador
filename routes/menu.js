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
      } = require('../controllers/menuLateral.controller');
const session = require('../controllers/session/session');
/* GET users listing. */

      router.use(session)
  router.get('/minhaCarteira',showMinhaCarteira)

  router.get('/meusInvestimentos',showInvestimentos);

  router.get('/graficos',showGraficos)

  router.get('/perfilInvestidor',showPerfilInvestidor)

  router.get('/cursos',showCursos);

  router.get('/dadosDaConta',showDadosConta)
  
  router.get('/dadosDaConta/:id',showDadosContaForm)


  router.get('/sair',logout);

module.exports=router;
