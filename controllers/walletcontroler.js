const models = require('../database/models')
const {v4:uuidV4} = require('uuid')

module.exports.getAddCarteira = function(req,res) {
    res.render('users/user/minhaCarteira/addCarteira')
}
module.exports.criarGanhoGasto = async (req,res) => {
    const ganhogasto = req.body
    console.log(ganhogasto)
    
   
    

    res.redirect('/user/minhaCarteira/listCarteira')
}

module.exports.getlistCarteira = function(req,res) {
    res.render('users/user/minhaCarteira/listCarteira')
}