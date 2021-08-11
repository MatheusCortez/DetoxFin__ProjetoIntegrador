const externo= window.location.pathname.split('/')[2];
const interno= window.location.pathname.split('/')[2];
const ItemMenu= document.querySelectorAll('.link a ')

function addedClass(){


 ItemMenu.forEach((item)=>{
 
   const itemInterno = item.getAttribute('href').split('/')[2]
   const paiItem = item.parentElement
     if(externo==item.getAttribute('href') || interno==itemInterno){
        paiItem.classList.add('ativo')
     
  
     }
  
  })
  
 
}

addedClass();




