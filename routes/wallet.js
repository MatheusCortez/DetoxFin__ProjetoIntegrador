const express = require('express');
const router = express.Router();

const arrayEntrada = [];
const arraySaida =[];

/* GET users listing. */
router.get('/addCarteira', function(req, res, next) {
  res.render('users/user/minhaCarteira/addCarteira')

});
router.post('/addCarteiraEntrada', (req,res) => {
  const entradaNova = {
    id:arrayEntrada.length +1,
    ...req.body
  }
  arrayEntrada.push(entradaNova)
  res.redirect('/user/minhaCarteira/listCarteira')  
});

router.post('/addCarteiraSaida', (req,res) => {
  const saidaNova = {
    id:arraySaida.length +1,
    ...req.body
  }
  arraySaida.push(saidaNova)
  res.redirect('/user/minhaCarteira/listCarteira')
});

router.get('/listCarteira', (req,res) =>{
  res.render('users/user/minhaCarteira/listCarteira', {entradas: arrayEntrada, saidas: arraySaida})
});

router.post('/deletarEntrada/:id', (req, res) => {
  const idEntrada = parseInt(req.params.id)

  for (let i = arrayEntrada.length - 1; i >= 0; i--) {
      const entrada = arrayEntrada[i]

      if (entrada.id === idEntrada) {
          arrayEntrada.splice(i, 1)
          break
      }
  }

  res.redirect('/user/minhaCarteira/listCarteira')
})

router.post('/deletarSaida/:id', (req, res) => {
  const idSaida = parseInt(req.params.id)

  for (let i = arraySaida.length - 1; i >= 0; i--) {
      const saida = arraySaida[i]

      if (saida.id === idSaida) {
          arraySaida.splice(i, 1)
          break
      }
  }

  res.redirect('/user/minhaCarteira/listCarteira')
})

module.exports = router;