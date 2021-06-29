const models = require('../database/models')
const {v4:uuidV4} = require('uuid')

module.exports.getPergunta = (req,res) => {
    const usuario = req.session.usuario
    res.render('users/user/perfilInvestidor/pergunta', {usuario})
}

module.exports.postPerfilInvestidor = async (req,res) => {
    const questionario = req.body
    const array = Object.values(questionario)
    console.log(array)

    var respostasA = 0
    var respostasB = 0
    var respostasC = 0

    for (var i=0; i < array.length; i++) {
        if ( array[i] == 'a') {
        respostasA++;
        }else if ( array[i] == 'b'){
        respostasB++;
        } else if ( array[i] == 'c' ) {
        respostasC++;
        }
    }

    console.log('respostas A:', respostasA)
    console.log('respostas B:',respostasB)
    console.log('respostas C:',respostasC)

    

    if (respostasA > respostasB && respostasA > respostasC ){

        var perfilInvestidor = 'Conservador'
        res.redirect('/user/perfilInvestidor/resultadoConservador')

    } else if (respostasB > respostasC && respostasB > respostasA) {

        var perfilInvestidor = 'Moderado'
        res.redirect('/user/perfilInvestidor/resultadoModerado')

    } else if (respostasC > respostasA && respostasC > respostasB ){

        var perfilInvestidor = 'Agressivo'
        res.redirect('/user/perfilInvestidor/resultadoAgressivo')
    }

    console.log(perfilInvestidor)

    

    

}

module.exports.resultadoConservador = (req,res) => {
    /* const usuario = req.session.usuario */
  
    res.render('users/user/perfilInvestidor/conservador', /*{usuario}*/)
}

module.exports.resultadoModerado = (req,res) => {
    /* const usuario = req.session.usuario */
  
    res.render('users/user/perfilInvestidor/moderado', /* {usuario} */)
}

module.exports.resultadoAgressivo = (req,res) => {
    /* const usuario = req.session.usuario */
  
    res.render('users/user/perfilInvestidor/agressivo', /* {usuario} */)
}