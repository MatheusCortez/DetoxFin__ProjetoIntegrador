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
      valorGasto.push(gasto[i].dataValues.valor)
  }

    const nomeGanhoString =JSON.stringify(nomeGanho);
    const valorGanhoString = JSON.stringify(valorGanho) 

    const nomeGastoString =JSON.stringify(nomeGasto);
    const valorGastoString = JSON.stringify(valorGasto);
    


   var JanGasto = 0
   var FevGasto = 0
   var MarGasto = 0
   var AbrilGasto = 0
   var MaioGasto = 0 
   var JunGasto = 0
   var JulGasto = 0
   var AgoGasto = 0
   var SetGasto = 0
   var OutGasto = 0
   var NovGasto = 0 
   var DezGasto = 0

   for (let i=0; i < gasto.length; i ++ ){
     var data = await gasto[i].dataValues.data.toISOString().slice(5,7)
     if (data == '01'){
       JanGasto = JanGasto + gasto[i].dataValues.valor
     } else if (data == '02'){
      FevGasto = FevGasto + gasto[i].dataValues.valor
    } else if (data == '03'){
      MarGasto = MarGasto + gasto[i].dataValues.valor
    } else if (data == '04'){
      AbrilGasto = AbrilGasto + gasto[i].dataValues.valor
    }else if (data == '05'){
      MaioGasto = MaioGasto + gasto[i].dataValues.valor
    }else if (data == '06'){
      JunGasto = JunGasto + gasto[i].dataValues.valor
    }else if (data == '07'){
      JulGasto = JulGasto + gasto[i].dataValues.valor
    }else if (data == '08'){
      AgoGasto = AgoGasto + gasto[i].dataValues.valor
    }else if (data == '09'){
      SetGasto = SetGasto + gasto[i].dataValues.valor
    }else if (data == '10'){
      OutGasto = OutGasto + gasto[i].dataValues.valor
    }else if (data == '11'){
      NovGasto = NovGasto + gasto[i].dataValues.valor
    }else if (data == '12'){
      DezGasto = DezGasto + gasto[i].dataValues.valor
    }
   }

   const AnoGasto = [JanGasto, FevGasto, MarGasto, AbrilGasto, MaioGasto, JunGasto, JulGasto, AgoGasto, SetGasto, OutGasto, NovGasto, DezGasto]

   const AnoGastoString = JSON.stringify(AnoGasto);

   var JanGanho = 0
   var FevGanho = 0
   var MarGanho = 0
   var AbrilGanho = 0
   var MaioGanho = 0 
   var JunGanho = 0
   var JulGanho = 0
   var AgoGanho = 0
   var SetGanho = 0
   var OutGanho = 0
   var NovGanho = 0 
   var DezGanho = 0

   for (let i=0; i < ganho.length; i ++ ){
     var data = await ganho[i].dataValues.data.toISOString().slice(5,7)
     if (data == '01'){
       JanGanho = JanGanho + ganho[i].dataValues.valor
     } else if (data == '02'){
      FevGanho = FevGanho + ganho[i].dataValues.valor
    } else if (data == '03'){
      MarGanho = MarGanho + ganho[i].dataValues.valor
    } else if (data == '04'){
      AbrilGanho = AbrilGanho + ganho[i].dataValues.valor
    }else if (data == '05'){
      MaioGanho = MaioGanho + ganho[i].dataValues.valor
    }else if (data == '06'){
      JunGanho = JunGanho + ganho[i].dataValues.valor
    }else if (data == '07'){
      JulGanho = JulGanho + ganho[i].dataValues.valor
    }else if (data == '08'){
      AgoGanho = AgoGanho + ganho[i].dataValues.valor
    }else if (data == '09'){
      SetGanho = SetGanho + ganho[i].dataValues.valor
    }else if (data == '10'){
      OutGanho = OutGanho + ganho[i].dataValues.valor
    }else if (data == '11'){
      NovGanho = NovGanho + ganho[i].dataValues.valor
    }else if (data == '12'){
      DezGanho = DezGanho + ganho[i].dataValues.valor
    }
   }

   const AnoGanho = [JanGanho, FevGanho, MarGanho, AbrilGanho, MaioGanho, JunGanho, JulGanho, AgoGanho, SetGanho, OutGanho, NovGanho, DezGanho]

   const AnoGanhoString = JSON.stringify(AnoGanho);




   
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
      graphicsBarGasto:{
        data:AnoGastoString
      },
      graphicsBarGanho:{
        data:AnoGanhoString
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

    var label = [];
    var dados = [];
    if (usuario.perfilInvestidor == ''){
      label = ['Renda Fixa', 'Renda Variável']
      dados = [50,50]
    } else if ( usuario.perfilInvestidor == 'Conservador'){
      label = ['Renda Fixa', 'Renda Variável']
      dados = [60,40]
    }else if( usuario.perfilInvestidor == 'Moderado'){
      label = ['Renda Fixa', 'Renda Variável']
      dados = [40,60]
    }else if( usuario.perfilInvestidor == 'Agressivo'){
      label = ['Renda Fixa', 'Renda Variável']
      dados = [10,90]
    }
  
    console.log(label, dados)
    const labelString = JSON.stringify(label);
    const dadosString = JSON.stringify(dados)
    console.log(labelString, dadosString)
    res.render('pages/internas/graficos/main',{
      usuario,
      graphics: {
        labels:labelString,
        data:dadosString
      }
    })
  }

  module.exports.showPerfilInvestidor = function(req,res,next){
    const usuario = req.session.usuario
    
    const tentar = req.session.regenerate(function(usuario) {
        
    })

    console.log(tentar)
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
    req.session.destroy((error)=>{
      res.redirect('/')
    });
   
  }