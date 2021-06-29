const models = require('../database/models')
const {v4:uuidV4} = require('uuid')

module.exports.getAddCarteira = function(req,res) {
    const usuario = req.session.usuario
    res.render('users/user/minhaCarteira/addCarteira',  {usuario})
}
module.exports.criarGanhoGasto = async (req,res) => {
    const usuario = req.session.usuario
    const ganhogasto = req.body
    console.log(ganhogasto)
    
    const carteira = await carteira.findAll()

    console.log(carteira)


    const ganhogastoCriado = await models.ganhogastos.create({
        data:ganhogasto.date,
        descricao:ganhogasto.descricao,
        valor:ganhogasto.valor,
        Carteira_idCarteira:carteira.idCarteira ,
        Carteira_Usuario_idUsuario:carteira.Usuario_idUsuario ,
        entradaSaida:'',
        nome:ganhogasto.nome

    });
   
    
    console.log(ganhogastoCriado)

    res.render('users/user/minhaCarteira/listCarteira',  {usuario})
}

module.exports.getlistCarteira = function(req,res) {
    const usuario = req.session.usuario
    res.render('users/user/minhaCarteira/listCarteira',  {usuario})
}