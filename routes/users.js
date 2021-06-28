const express = require('express');
const router = express.Router();

const showpages = require('../controllers/showPages/showPagesController')
const {newUser,Auth} = require('../controllers/users.controllers')

router.get('/',showpages.showIndex)

router.get('/user/index',showpages.showInternalIndex)

router.get('/recoverypass',showpages.showRecoveryPass)

router.get('/new',showpages.showNew)

router.post('/new',newUser)

router.get('/auth',showpages.showAuth)

router.post('/auth',Auth)






module.exports = router;
