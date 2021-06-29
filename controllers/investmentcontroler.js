const models = require('../database/models')
const {v4:uuidV4} = require('uuid')

module.exports.getaddInvestment = async (req,res) => {
    res.render('users/user/meusInvestimentos/addInvestment')
}
module.exports.criarInvestment = async (req,res) => {
    const array = req.body
    console.log(array)
    res.redirect('/user/meusInvestimentos/listInvestimento')
}

module.exports.getlistInvestment = async (req,res) => {
    res.render('users/user/meusInvestimentos/listInvestment')
}