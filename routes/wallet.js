const express = require('express');
const router = express.Router();

const arrayEntrada = [];
const arraySaida =[];

/* GET users listing. */
router.get('/addCarteira', function(req, res, next) {
  const usuario = req.session.usuario
  res.render('users/user/minhaCarteira/addCarteira', {usuario})

});
router.post('/addCarteiraEntrada', (req,res) => {
  const usuario = req.session.usuario
  const entradaNova = {
    id:arrayEntrada.length +1,
    ...req.body
  }
  arrayEntrada.push(entradaNova)
  res.redirect('/user/minhaCarteira/listCarteira', {usuario})  
});

router.post('/addCarteiraSaida', (req,res) => {
  const usuario = req.session.usuario
  const saidaNova = {
    id:arraySaida.length +1,
    ...req.body
  }
  arraySaida.push(saidaNova)
  res.redirect('/user/minhaCarteira/listCarteira', {usuario})
});

router.get('/listCarteira', (req,res) =>{
  const usuario = req.session.usuario
  res.render('users/user/minhaCarteira/listCarteira', {entradas: arrayEntrada, saidas: arraySaida, usuario})
});

router.post('/deletarEntrada/:id', (req, res) => {
  const usuario = req.session.usuario
  const idEntrada = parseInt(req.params.id)

  for (let i = arrayEntrada.length - 1; i >= 0; i--) {
      const entrada = arrayEntrada[i]

      if (entrada.id === idEntrada) {
          arrayEntrada.splice(i, 1)
          break
      }
  }

  res.redirect('/user/minhaCarteira/listCarteira', {usuario})
})

router.post('/deletarSaida/:id', (req, res) => {
  const usuario = req.session.usuario
  const idSaida = parseInt(req.params.id)

  for (let i = arraySaida.length - 1; i >= 0; i--) {
      const saida = arraySaida[i]

      if (saida.id === idSaida) {
          arraySaida.splice(i, 1)
          break
      }
  }

  res.redirect('/user/minhaCarteira/listCarteira', {usuario})
})

module.exports = router;