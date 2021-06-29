const express = require('express');
const router = express.Router();

const walletControler = require('../controllers/walletcontroler')

/* GET users listing. */
router.get('/addCarteira', walletControler.getAddCarteira);


router.post('/addCarteira', walletControler.criarGanhoGasto);


router.get('/listCarteira', walletControler.getlistCarteira);




module.exports = router;