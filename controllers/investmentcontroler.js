const models = require('../database/models')
const {v4:uuidV4} = require('uuid')
const carteirainvestimentos = require('../database/models/carteirainvestimentos')

module.exports.getaddInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    res.render('pages/internas/Investimentos/main/addInvestiment/addInvestment.ejs',{usuario})
}
module.exports.criarInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    const array = req.body


    const user = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteirainvestimentos'
        ]
    })
    

    await models.tiposdeinvestimento.create({
        aplicacaoInicial:array.valor,
        dateInicial:array.inicialDate,
        valorTotal:array.valor,
        aporte:0,
        previsaoDeLucros:0,
        lucro:0,
        dataFinalPrevista:0,
        CNPJ:0,
        carteiraInvestimentos_idInvestimentos:user.carteirainvestimentos.idInvestimentos ,
        renda:array.renda,
        orgaoEmissor:0,
        juros:' ',
        descricao:' ',
        nome:array.nome,
        carteirainvestimentos_usuario_idUsuario:usuario.idUsuario,
        tipo:array.tipo,
        
    });



    res.redirect('/user/meusInvestimentos/listInvestimento')
}

module.exports.getlistInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    const user = await models.carteirainvestimentos.findOne({
        where: {
            Usuario_idUsuario: usuario.idUsuario
        }
    })
    let { pagination = 1 } = req.query
    let {count:total, rows:carteira } = await models.tiposdeinvestimento.findAndCountAll({
        where: {
            carteirainvestimentos_usuario_idUsuario: usuario.idUsuario,
            carteiraInvestimentos_idInvestimentos: user.idInvestimentos
        },
        offset:(pagination - 1) * 4,
        limit:4
    })
    
    let totalPagina = Math.round(total/4)


    res.render('pages/internas/Investimentos/main/listInvestiment/listInvestment.ejs',{usuario , carteira, totalPagina})
}


module.exports.deletarlistInvestment = async (req,res) => {
    const id = parseInt(req.params.id)
 
    const deletar = await models.tiposdeinvestimento.destroy({
        where: {
            idTipoDeInvestimento: id
        }
    })
    

    res.redirect('/user/meusInvestimentos/listInvestimento')
}
module.exports.editarlistInvestment = async (req,res) => {
    const usuario = req.session.usuario

    const id = parseInt(req.params.id)

    const investimento = await models.tiposdeinvestimento.findOne({
        where: {
            idTipoDeInvestimento: id
        }
    })

    investimento.dateInicial= investimento.dateInicial.toISOString().slice(0,10)
    
    res.render('pages/internas/Investimentos/main/editInvestiment/editInvestment.ejs', { usuario, investimento, id})
}

module.exports.editarUpdatelistInvestment = async (req,res) => {
    const usuario = req.session.usuario

    const editar = req.body

    const id = parseInt(req.params.id)

    const investimento = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteirainvestimentos'
        ]
    })

  

    await models.tiposdeinvestimento.update({

        aplicacaoInicial:editar.valor,
        dateInicial:editar.inicialDate,
        valorTotal:editar.valor,
        carteiraInvestimentos_idInvestimentos:investimento.idInvestimentos ,
        renda:editar.renda,
        nome:editar.nome,
        carteirainvestimentos_usuario_idUsuario:usuario.idUsuario,
        tipo:editar.tipo,
    },
    {
        where:{
            idTipoDeInvestimento:id
        }
        
    });


    
    res.redirect('/user/meusInvestimentos/listInvestimento')

}