const models = require('../database/models')
const {v4:uuidV4} = require('uuid')

module.exports.getaddInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    res.render('users/user/meusInvestimentos/addInvestment',{usuario})
}
module.exports.criarInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    const array = req.body
    console.log(array)
    res.redirect('/user/meusInvestimentos/listInvestimento',{usuario})
}

module.exports.getlistInvestment = async (req,res) => {
    const usuario = req.session.usuario 
    
    res.render('users/user/meusInvestimentos/listInvestment',{usuario})
}