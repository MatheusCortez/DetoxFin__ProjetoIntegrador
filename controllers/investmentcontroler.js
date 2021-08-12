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

    console.log(array)


    const user = await models.User.findOne({
        where: {
            idUsuario: usuario.idUsuario
        },
        include: [
            'carteirainvestimentos'
        ]
    })
    

    await models.tiposdeInvestimento.create({
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
    const carteira = await models.tiposdeInvestimento.findAll({
        where: {
            carteirainvestimentos_usuario_idUsuario: usuario.idUsuario,
            carteiraInvestimentos_idInvestimentos: user.idInvestimentos
        },
    })


    res.render('pages/internas/Investimentos/main/listInvestiment/listInvestment.ejs',{usuario , carteira})
}


module.exports.deletarlistInvestment = async (req,res) => {
    const id = parseInt(req.params.id)
 
    const deletar = await models.tiposdeInvestimento.destroy({
        where: {
            idTipoDeInvestimento: id
        }
    })
    

    res.redirect('/user/meusInvestimentos/listInvestimento')
}
module.exports.editarlistInvestment = async (req,res) => {
    const usuario = req.session.usuario

    const id = parseInt(req.params.id)

    const investimento = await models.tiposdeInvestimento.findOne({
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

    console.log(id)
    console.log(editar)

    await models.tiposdeInvestimento.update({

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