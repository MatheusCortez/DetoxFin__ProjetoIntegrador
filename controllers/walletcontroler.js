const models = require('../database/models')
const { v4: uuidV4 } = require('uuid')

module.exports.getAddCarteira = function (req, res) {
    const usuario = req.session.usuario
    res.render('pages/internas/index/main/addCarteira/addCarteira.ejs', { usuario })
}
module.exports.criarGanhoGasto = async (req, res) => {
    const usuario = req.session.usuario


    const ganhogasto = req.body


    const carteira = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteira'
        ]
    })
    await models.ganhogastos.create({
        data: ganhogasto.date,
        descricao: ganhogasto.descricao,
        valor: ganhogasto.valor,
        Carteira_idCarteira: carteira.carteira.idCarteira,
        Carteira_Usuario_idUsuario: usuario.idUsuario,
        entradaSaida:ganhogasto.tipo,
        nome: ganhogasto.nome

    });




    

    res.redirect('/user/minhaCarteira/listCarteira')
}

module.exports.getlistCarteira = async (req, res) => {
    const usuario = req.session.usuario


    const user = await models.carteira.findOne({
        where: {
            Usuario_idUsuario: usuario.idUsuario
        }
    })
    const carteira = await models.ganhogastos.findAll({
        where: {
            Carteira_Usuario_idUsuario: usuario.idUsuario,
            Carteira_idCarteira: user.idCarteira
        },
       
    })
    const descricao=[];
    const valor=[];

    for(let i=0;i<carteira.length;i++){
        descricao.push(carteira[i].dataValues.descricao)
        valor.push(carteira[i].dataValues.valor)
    }
  
  
    

    res.render('pages/internas/index/main/listCarteira/listCarteira', { usuario, carteira })
}


