const express = require('express');
const db = require('../database/db')
const router = express.Router();
const session = require ('../controllers/session/session')
const showpages = require('../controllers/showPages/showPagesController')
const {newUser,Auth} = require('../controllers/users.controllers');


router.get('/',showpages.showIndex)

router.get('/new',showpages.showNew)

router.post('/new',newUser)

router.get('/auth',showpages.showAuth)

router.post('/auth',Auth)

router.get('/user/index',session,showpages.showInternalIndex)







module.exports = router;
