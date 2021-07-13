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

    if(usuario.perfilInvestidor == ''){

      res.render('users/user/perfilInvestidor/main',{usuario})

    }else if(usuario.perfilInvestidor == 'Conservador'){

      res.redirect('/user/perfilInvestidor/resultadoConservador')

    }else if(usuario.perfilInvestidor == 'Moderado'){

      res.redirect('/user/perfilInvestidor/resultadoModerado')

    }else if(usuario.perfilInvestidor == 'Agressivo'){

      res.redirect('/user/perfilInvestidor/resultadoAgressivo')
      
    }
 
  }
  module.exports.showCursos = function(req, res, next) {
    const usuario = req.session.usuario   
    res.render('users/user/cursos/main',{usuario});
  }

  module.exports.showDadosConta =function(req,res,next){
    const usuario = req.session.usuario
    res.render('users/user/dadosDaConta/main',{usuario})
  }
  module.exports.logout =function(req,res,next){
    
    res.render('index')
  }