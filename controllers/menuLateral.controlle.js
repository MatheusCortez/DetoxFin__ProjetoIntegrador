module.exports.showMinhaCarteira =function(req,res,next){
    res.render('users/user/minhaCarteira/index')
  }

  module.exports.showInvestimentos =function(req, res, next) {
    res.render('users/user/meusInvestimentos/main');
  }


  module.exports.showGraficos =function(req,res,next){
    res.render('users/user/graficos/main')
  }

  module.exports.showPerfilInvestidor = function(req,res,next){
    res.render('users/user/perfilInvestidor/main')
  }
  module.exports.showCursos = function(req, res, next) {
    res.render('users/user/cursos/main');
  }

  module.exports.showDadosConta =function(req,res,next){
    res.render('users/user/dadosDaConta/main')
  }
  module.exports.logout =function(req,res,next){
    res.render('index')
  }