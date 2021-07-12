
module.exports.showIndex = function(req,res){
    res.render('pages/externas/index')
  }
  

  module.exports.showRecoveryPass =function(req,res){
    res.render('users/recoverypass',)
  }
  
  module.exports.showNew = function(req,res,next){
    res.render('pages/externas/new/index',{
      error:{},
      content:{}
    });
    

  }        

  module.exports.showInternalIndex =function(req,res){
   
    res.render('/user/minhaCarteira')
   
}
  
  
  module.exports.showAuth = function(req,res,next){
      res.render('users/auth',{
        error:{},
        content:{}
      })
  
    } 
    module.exports.showInternalIndex =function(req,res,next){
   
      res.render('/user/minhaCarteira')
     
  }