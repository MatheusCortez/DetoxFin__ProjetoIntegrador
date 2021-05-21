const express = require('express');
const router = express.Router();

const array = [];

/* GET users listing. */
router.get('/addCarteira', function(req, res, next) {
  res.render('users/user/minhaCarteira/addCarteira')

});
router.get('/listCarteira', function(req, res, next) {
    res.render('users/user/minhaCarteira/listCarteira')
  
  });

  module.exports = router;