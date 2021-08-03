const models = require('../database/models')

module.exports.showMinhaCarteira = async function(req,res,next){
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
    const descricaoString =JSON.stringify(descricao);
    const valorString = JSON.stringify(valor) 

    res.render('pages/internas/index',{
      usuario,
      graphics:{
        labels:descricaoString,
        data:valorString
      },
    })


    
  }

  module.exports.showInvestimentos =function(req, res, next) {
    const usuario = req.session.usuario
    console.log(req.session)
    res.render('pages/internas/Investimentos/',{usuario});
    
  }


  module.exports.showGraficos =function(req,res,next){
    const usuario = req.session.usuario
    res.render('pages/internas/graficos/main',{usuario})
  }

  module.exports.showPerfilInvestidor = function(req,res,next){
    const usuario = req.session.usuario
 
    res.render('pages/internas/perfilInvestidor/main.ejs',{usuario})
  }
  module.exports.showCursos = function(req, res, next) {
    const usuario = req.session.usuario   
    res.render('pages/internas/cursos/main',{usuario});
  }

  module.exports.showDadosConta =function(req,res,next){
    const usuario = req.session.usuario
    res.render('pages/internas/dados/main',{usuario})
  }

  module.exports.showDadosContaForm= (req,res,next)=>{
    const usuario = req.session.usuario
   
    res.render('pages/internas/dados/formulario/dadosForm',{usuario})
  }




  module.exports.logout =function(req,res,next){
    
    res.render('index')
  }