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
  const array = Object.values(questionario)
  console.log(array)

  var respostasA = 0
  var respostasB = 0
  var respostasC = 0

  for (var i=0; i < array.length; i++) {
    if ( array[i] == 'a') {
      respostasA++;
    }else if ( array[i] == 'b'){
      respostasB++;
    } else if ( array[i] == 'c' ) {
      respostasC++;
    }
  }

  console.log('respostas A:', respostasA)
  console.log('respostas B:',respostasB)
  console.log('respostas C:',respostasC)

  if (respostasA > respostasB && respostasA > respostasC ){
    res.redirect('/user/perfilInvestidor/resultadoConservador')
  } else if (respostasB > respostasC && respostasB > respostasA) {
    res.redirect('/user/perfilInvestidor/resultadoModerado')
  } else if (respostasC > respostasA && respostasC > respostasB ){
    res.redirect('/user/perfilInvestidor/resultadoAgressivo')
  }
})

router.get('/resultadoConservador', function(req, res, next) {
  const usuario = req.session.usuario
  
  res.render('users/user/perfilInvestidor/conservador', {usuario})

})

router.get('/resultadoModerado', function(req, res, next) {
  const usuario = req.session.usuario
  
  res.render('users/user/perfilInvestidor/moderado', {usuario})

})

router.get('/resultadoAgressivo', function(req, res, next) {
  const usuario = req.session.usuario
  
  res.render('users/user/perfilInvestidor/agressivo', {usuario})

})


module.exports = router;
