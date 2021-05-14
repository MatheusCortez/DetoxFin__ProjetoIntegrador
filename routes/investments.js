var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/addInvestimentos', function(req, res, next) {
  res.render('users/user/meusInvestimentos/addInvestment')

})

module.exports = router;