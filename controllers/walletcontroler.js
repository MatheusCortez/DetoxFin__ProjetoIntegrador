const models = require('../database/models')
const { v4: uuidV4 } = require('uuid')

module.exports.getAddCarteira = function (req, res) {
    const usuario = req.session.usuario
    res.render('users/user/minhaCarteira/addCarteira', { usuario })
}
module.exports.criarGanhoGasto = async (req, res) => {
    const usuario = req.session.usuario
    console.log(usuario)

    const ganhogasto = req.body
    console.log(ganhogasto)


    const carteira = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteira'
        ]
    })

    console.log(carteira.toJSON())
    
    await models.ganhogastos.create({
        data: ganhogasto.date,
        descricao: ganhogasto.descricao,
        valor: ganhogasto.valor,
        Carteira_idCarteira: carteira.carteira.idCarteira,
        Carteira_Usuario_idUsuario: usuario.idUsuario,
        entradaSaida:ganhogasto.tipo,
        nome: ganhogasto.nome

    });




    console.log(ganhogastoCriado)

    res.redirect('/user/minhaCarteira/listCarteira', { usuario })
}

module.exports.getlistCarteira = function (req, res) {
    const usuario = req.session.usuario
    res.render('users/user/minhaCarteira/listCarteira', { usuario })
}