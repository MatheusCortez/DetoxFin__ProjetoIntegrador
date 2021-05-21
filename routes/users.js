const express = require('express');
const router = express.Router();
const {showIndex,
        showNew,
        newUser,
        showAuth,
        Auth,
        showInternalIndex,
        showRecoveryPass
        } = require('../controllers/users.controllers')
const fs = require('fs')
const bcrypt = require('bcrypt');


//rota index
router.get('/',showIndex)
//rota nova get
router.get('/new',showNew)

//rota nova post com confirmacao de senha
router.post('/new',newUser)

router.get('/teste',(req,res,next)=>{
  res.render('users/teste',{usuarios:require('../arquivo.json')})
})

router.get('/auth',showAuth)

router.post('/auth',Auth)



router.get('/user/index',showInternalIndex)

router.get('/recoverypass',showRecoveryPass)





module.exports = router;
