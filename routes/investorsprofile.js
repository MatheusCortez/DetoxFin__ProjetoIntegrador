var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/pergunta1', function(req, res, next) {
  res.render('users/user/perfilInvestidor/pergunta')

})

module.exports = router;