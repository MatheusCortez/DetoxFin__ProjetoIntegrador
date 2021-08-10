const express = require('express');
const router = express.Router();

const investmentControler = require('../controllers/investmentcontroler')


/* GET users listing. */
router.get('/addInvestimento', investmentControler.getaddInvestment);

router.post('/addInvestimento', investmentControler.criarInvestment);

router.get('/listInvestimento', investmentControler.getlistInvestment);

router.post('/listInvestment/deletar/:id', investmentControler.deletarlistInvestment);

router.post('/listInvestment/editar/:id', investmentControler.editarlistInvestment);

router.post('/editInvestment', investmentControler.editarUpdatelistInvestment);

module.exports = router;