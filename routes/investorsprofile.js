const express = require('express');
const router = express.Router();
const investorprofilecontroller = require('../controllers/investorprofilecontroller')

router.use(express.urlencoded({extended: false}));

router.get('/pergunta1', investorprofilecontroller.getPergunta)

router.post('/pergunta1', investorprofilecontroller.postPerfilInvestidor)

router.get('/resultadoConservador', investorprofilecontroller.resultadoConservador)

router.get('/resultadoModerado', investorprofilecontroller.resultadoModerado)

router.get('/resultadoAgressivo', investorprofilecontroller.resultadoAgressivo)


module.exports = router;
