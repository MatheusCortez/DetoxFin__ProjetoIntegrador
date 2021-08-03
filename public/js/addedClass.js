const interno= window.location.pathname
const ItemMenu= document.querySelectorAll('.link a ')

function addedClass(){
   
 ItemMenu.forEach((item)=>{
   const paiItem = item.parentElement
     if(interno==item.getAttribute('href')){
        paiItem.classList.add('ativo')
     
  
     }
  
  })
  
 
}

addedClass();




