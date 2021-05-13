var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/new',function(req,res,next){
  res.render('users/new')
})
router.get('/auth',function(req,res,next){
  res.render('users/auth')
})

router.get('/user/index',function(req,res,next){
  res.render('users/user/index')
})


module.exports = router;
