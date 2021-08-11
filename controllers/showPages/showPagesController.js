
module.exports.showIndex = function(req,res){
    res.render('pages/externas/index')
  }
  module.exports.showNew = function(req,res,next){
    res.render('pages/externas/new/index',{
      error:{},
      content:{}
    });
    

  }   


  module.exports.showAuth = function(req,res,next){
    res.render('pages/externas/auth',{
      error:{},
      content:{}
    })

  } 


  


  
     



  
  

    module.exports.showInternalIndex =function(req,res,next){
   
      res.render('pages/internas/index')
     
  }


  