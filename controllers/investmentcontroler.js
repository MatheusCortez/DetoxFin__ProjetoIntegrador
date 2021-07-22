const models = require('../database/models')
const {v4:uuidV4} = require('uuid')
const carteirainvestimentos = require('../database/models/carteirainvestimentos')

module.exports.getaddInvestment = async (req,res) => {
    const usuario = req.session.usuario 

    res.render('users/user/meusInvestimentos/addInvestment',{usuario})
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
    
    const finalDate = array.finalDate.join('')
    const cnpj = array.cnpj.join('')
    const orgaoEmissor = array.emissor.join('')

    await models.tiposdeInvestimento.create({
        aplicacaoInicial:array.valor,
        dateInicial:array.inicialDate,
        valorTotal:array.valor,
        aporte:0,
        previsaoDeLucros:0,
        lucro:0,
        dataFinalPrevista:finalDate,
        CNPJ:cnpj,
        carteiraInvestimentos_idInvestimentos:user.carteirainvestimentos.idInvestimentos ,
        renda:array.renda,
        orgaoEmissor:orgaoEmissor,
        juros:array.juros,
        descricao:array.descricao,
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


    res.render('users/user/meusInvestimentos/listInvestment',{usuario , carteira})
}

module.exports.deletelistInvestment = async (req,res) => {
   

    console.log('deletar')
    

    res.redirect('/user/meusInvestimentos/listInvestimento')
}