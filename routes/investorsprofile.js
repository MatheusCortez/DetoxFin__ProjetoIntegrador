const express = require('express');
const router = express.Router();

router.use(express.urlencoded({extended: false}));

const array = []
/* GET users listing. */
router.get('/pergunta1', function(req, res, next) {
  const usuario = req.session.usuario
  res.render('users/user/perfilInvestidor/pergunta', {usuario})

})

router.post('/pergunta1', (req,res) => {
  const questionario = req.body
  array.push(questionario)
  console.log(array)
  res.redirect('/user/perfilInvestidor/resultado')
})

router.get('/resultado', function(req, res, next) {
  const usuario = req.session.usuario
  
  res.render('users/user/perfilInvestidor/resultado', {usuario})

})


module.exports = router;
