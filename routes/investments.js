const express = require('express');
const router = express.Router();

const array = [];


/* GET users listing. */
router.get('/addInvestiment', function(req, res, next) {
  const usuario = req.session.usuario
  res.render('users/user/meusInvestimentos/addInvestment',{usuario})

});
router.post('/addInvestment', (req,res) => {
  const usuario = req.session.usuario
  const investmentNovo = {
    id:array.length + 1,
    ...req.body

  }
  array.push(investmentNovo)
  res.redirect('/user/meusInvestimentos/listInvestment', {usuario})
});

router.get('/listInvestment', (req,res) =>{
  const usuario = req.session.usuario
  res.render('users/user/meusInvestimentos/listInvestment', {investimentos: array, usuario})
});

router.post('/deletar/:id', (req, res) => {
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
})


module.exports = router;