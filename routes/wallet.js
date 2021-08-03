const express = require('express');
const router = express.Router();

const walletControler = require('../controllers/walletcontroler')

/* GET users listing. */
router.get('/addCarteira', walletControler.getAddCarteira);


router.post('/addCarteira', walletControler.criarGanhoGasto);


router.get('/listCarteira', walletControler.getlistCarteira);

router.post('/listCarteira/deletar/:id', walletControler.deletarlistCarteira);

router.post('/listCarteira/editar/:id', walletControler.editarlistCarteira);

module.exports = router;