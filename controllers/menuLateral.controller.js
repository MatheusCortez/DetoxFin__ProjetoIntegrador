module.exports.showMinhaCarteira =function(req,res,next){
  const usuario = req.session.usuario
  
    res.render('pages/internas/index',{usuario})

    
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