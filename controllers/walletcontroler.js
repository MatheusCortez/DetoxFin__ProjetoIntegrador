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

    
    for (var i = 0; i < carteira.length; i++){

        const descricao = carteira[i].descricao

        carteira[i].descricao = descricao.slice(0,1).toUpperCase() + descricao.slice(1,100).toLowerCase()

        
    }

 

    res.render('pages/internas/index/main/listCarteira/listCarteira', { usuario, carteira })
}



module.exports.deletarlistCarteira = async (req,res) => {
    const id = parseInt(req.params.id)
 
    const deletar = await models.ganhogastos.destroy({
        where: {
            idGanhoGastos: id
        }
    })
    

    res.redirect('/user/minhaCarteira/listCarteira')
}

module.exports.editarlistCarteira= async (req,res) => {
    const usuario = req.session.usuario

    const id = parseInt(req.params.id)

    const ganhogasto = await models.ganhogastos.findOne({
        where: {
            idGanhoGastos: id
        }
    })
    
    ganhogasto.data = ganhogasto.data.toISOString().slice(0,10)

    
    res.render('pages/internas/index/main/editCarteira/editCarteira.ejs', { usuario, ganhogasto, id })
}

module.exports.editarUpdatelistCarteira = async (req,res) => {
    const usuario = req.session.usuario
    
    const ganhogasto = req.body

    const id = parseInt(req.params.id)
    


    const carteira = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteira'
        ]
    })

   

    await models.ganhogastos.update(
        {
            data: ganhogasto.date,
            descricao: ganhogasto.descricao,
            valor: ganhogasto.valor,
            Carteira_idCarteira: carteira.idCarteira,
            Carteira_Usuario_idUsuario: carteira.idUsuario,
            entradaSaida:ganhogasto.tipo,
            nome: ganhogasto.nome,
        },
        {
            where:{idGanhoGastos:id}
        });    
    
    res.redirect('/user/minhaCarteira/listCarteira')
}