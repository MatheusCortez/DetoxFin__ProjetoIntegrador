const express = require('express');
const router = express.Router();

const array = [];

/* GET users listing. */
router.get('/addInvestiment', function(req, res, next) {
  res.render('users/user/meusInvestimentos/addInvestment')

});
router.post('/addInvestment', (req,res) => {
  console.log(req.body)
  array.push(req.body)
  res.redirect('/user/meusInvestimentos/listInvestment')
});

router.get('/listInvestment', (req,res) =>{
    res.render('users/user/meusInvestimentos/listInvestment', {investimentos: array})
});
module.exports = router;