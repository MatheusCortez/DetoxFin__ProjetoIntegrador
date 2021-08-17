const models = require('../database/models')
const {Op} = require('sequelize')
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
    //filtro
    const filtro = req.query.filtro
    let filtroInicial = ['ganho','gasto']
    if(filtro != 'todos'){
        filtroInicial = filtroInicial.filter((f)=>{
            return filtro == f
        })
    }
   //busca pela carteira
    const user = await models.carteira.findOne({
        where: {
            Usuario_idUsuario: usuario.idUsuario
        }
    })
    //paginação
    let { pagination = 1 } = req.query
    //busca pelo ganho ou gasto
    let {count:total, rows:carteira } = await models.ganhogastos.findAndCountAll({
        where: {
            Carteira_Usuario_idUsuario: usuario.idUsuario,
            Carteira_idCarteira: user.idCarteira,
            entradaSaida:{
               [Op.or]:filtroInicial
            }
        },
        offset:(pagination - 1) * 4,
        limit:4
    })
    
    let totalPagina = Math.round(total/4)

    
    for (var i = 0; i < carteira.length; i++){


        const descricao = carteira[i].descricao
        const data = carteira[i].data
        const dia = data.toISOString().slice(8,10)
        const diaData = parseInt(dia) + 1
        if (diaData < 10 ){
            carteira[i].data =  '0' + JSON.stringify(diaData) + '/' + data.toISOString().slice(5,7) + '/' + data.toISOString().slice(0,4) 
        }else {
            carteira[i].data =  JSON.stringify(diaData) + '/' + data.toISOString().slice(5,7) + '/' + data.toISOString().slice(0,4) 
        }
        
        carteira[i].descricao = descricao.slice(0,1).toUpperCase() + descricao.slice(1,100).toLowerCase()
   
        
    }

 

    res.render('pages/internas/index/main/listCarteira/listCarteira', { usuario, carteira, filtro , totalPagina })
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
    

    console.log(ganhogasto)
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

