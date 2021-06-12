var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/pergunta1', function(req, res, next) {
  const usuario = req.session.usuario
  res.render('users/user/perfilInvestidor/pergunta', {usuario})

})

module.exports = router;