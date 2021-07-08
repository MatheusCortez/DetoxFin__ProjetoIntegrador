module.exports.showMinhaCarteira =function(req,res,next){
  const usuario = req.session.usuario
  
    res.render('users/user/minhaCarteira/index',{usuario})

    
  }

  module.exports.showInvestimentos =function(req, res, next) {
    const usuario = req.session.usuario
    console.log(req.session)
    res.render('users/user/meusInvestimentos/main',{usuario});
    
  }


  module.exports.showGraficos =function(req,res,next){
    const usuario = req.session.usuario
    res.render('users/user/graficos/main',{usuario})
  }

  module.exports.showPerfilInvestidor = function(req,res,next){
    const usuario = req.session.usuario
 
    res.render('users/user/perfilInvestidor/main',{usuario})
  }
  module.exports.showCursos = function(req, res, next) {
    const usuario = req.session.usuario   
    res.render('users/user/cursos/main',{usuario});
  }

  module.exports.showDadosConta =function(req,res,next){
    const usuario = req.session.usuario
    res.render('users/user/dadosDaConta/main',{usuario})
  }

  module.exports.showDadosContaForm= (req,res,next)=>{
    const usuario = req.session.usuario
   
    res.render('users/user/dadosDaConta/dadosForm',{usuario})
  }




  module.exports.logout =function(req,res,next){
    
    res.render('index')
  }