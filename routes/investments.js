const express = require('express');
const router = express.Router();

const investmentControler = require('../controllers/investmentcontroler')


/* GET users listing. */
router.get('/addInvestimento', investmentControler.getaddInvestment);

router.post('/addInvestimento', investmentControler.criarInvestment);

router.get('/listInvestimento', investmentControler.getlistInvestment);

router.post('/listInvestimento/deletar/:id',investmentControler.deletelistInvestment)

/* router.post('/deletar/:id', (req, res) => {
  const usuario = req.session.usuario
  const id = parseInt(req.params.id)

  for (let i = array.length - 1; i >= 0; i--) {
      const investimento = array[i]

      if (investimento.id === id) {
          array.splice(i, 1)
          break
      }
  }

  res.redirect('/user/meusInvestimentos/listInvestment', {usuario})
}) */


module.exports = router;