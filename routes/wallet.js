const express = require('express');
const router = express.Router();

const arrayGastos = [];
const arrayDespesas =[];

/* GET users listing. */
router.get('/addCarteira', function(req, res, next) {
  res.render('users/user/minhaCarteira/addCarteira')

});
router.post('/addCarteira', (req,res) => {
  arrayGastos.push(req.body)
  res.redirect('/user/minhaCarteira/listCarteira')
  console.log(arrayGastos)
});

router.get('/listCarteira', (req,res) =>{
    res.render('users/user/minhaCarteira/listCarteira', {
      gastos: arrayGastos
     
    })
});

module.exports = router;