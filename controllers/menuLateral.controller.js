const models = require('../database/models')

module.exports.showMinhaCarteira = async function(req,res,next){
  const usuario = req.session.usuario


    const user = await models.carteira.findOne({
        where: {
            Usuario_idUsuario: usuario.idUsuario
        }
    })
    const ganho = await models.ganhogastos.findAll({
        where: {
            Carteira_Usuario_idUsuario: usuario.idUsuario,
            Carteira_idCarteira: user.idCarteira,
            entradaSaida:'ganho'
        },
       
    })
    const gasto = await models.ganhogastos.findAll({
      where: {
          Carteira_Usuario_idUsuario: usuario.idUsuario,
          Carteira_idCarteira: user.idCarteira,
          entradaSaida:'gasto'
      },
     
  })
    const nomeGanho=[];
    const valorGanho=[];

    const nomeGasto=[];
    const valorGasto=[];

    for(let i=0;i<ganho.length;i++){
        nomeGanho.push(ganho[i].dataValues.nome)
        valorGanho .push(ganho[i].dataValues.valor)
    }

    for(let i=0;i<gasto.length;i++){
      nomeGasto.push(gasto[i].dataValues.nome)
      valorGasto .push(gasto[i].dataValues.valor)
  }
    const nomeGanhoString =JSON.stringify(nomeGanho);
    const valorGanhoString = JSON.stringify(valorGanho) 

    const nomeGastoString =JSON.stringify(nomeGasto);
    const valorGastoString = JSON.stringify(valorGasto) 

    res.render('pages/internas/index',{
      usuario,
      graphicsGanho:{
        labels:nomeGanhoString,
        data:valorGanhoString
      },
      graphicsGasto:{
        labels:nomeGastoString,
        data:valorGastoString
      },
    })


    
  }

  module.exports.showInvestimentos = async function(req, res, next) {
    const usuario = req.session.usuario

    const user = await models.carteirainvestimentos.findOne({
      where: {
          Usuario_idUsuario: usuario.idUsuario
      }
    })
    const investimento = await models.tiposdeInvestimento.findAll({
      where: {
          carteirainvestimentos_usuario_idUsuario: usuario.idUsuario,
          carteiraInvestimentos_idInvestimentos: user.idInvestimentos
        },
    })

      
    const nomeInvestimento=[];
    const valorInvestimento=[];

    for(let i=0;i<investimento.length;i++){
        nomeInvestimento.push(investimento[i].dataValues.nome)
        valorInvestimento.push(investimento[i].dataValues.valorTotal)
    }
    const nomeInvestimentoString =JSON.stringify(nomeInvestimento);
    const valorInvestimentoString = JSON.stringify(valorInvestimento) 

    
    res.render('pages/internas/Investimentos/',{
      usuario,
      graphicsInvestimento:{
        labels:nomeInvestimentoString,
        data:valorInvestimentoString
      }
    });
    
  }


  module.exports.showGraficos =function(req,res,next){
    const usuario = req.session.usuario
    res.render('pages/internas/graficos/main',{usuario})
  }

  module.exports.showPerfilInvestidor = function(req,res,next){
    const usuario = req.session.usuario
    
    if ( usuario.perfilInvestidor == ''){
      res.render('pages/internas/perfilInvestidor/main.ejs',{usuario})
    } else if (usuario.perfilInvestidor == 'Conservador'){
      res.redirect('/user/perfilInvestidor/resultadoConservador')
    } else if (usuario.perfilInvestidor == 'Moderado'){
      res.redirect('/user/perfilInvestidor/resultadoModerado')
    }else if (usuario.perfilInvestidor == 'Agressivo'){
      res.redirect('/user/perfilInvestidor/resultadoAgressivo')
    }
    
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