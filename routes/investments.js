var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/addInvestiment', function(req, res, next) {
  res.render('users/user/meusInvestimentos/addInvestment')

})

router.get('/listInvestment', function(req, res, next) {
  res.render('users/user/meusInvestimentos/listInvestment')

})
module.exports = router;