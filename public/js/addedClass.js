const urlExterna = window.location.pathname;
const urlInterna = window.location.pathname.split('/')[2]
const ItemMenu= document.querySelectorAll('.link a ')
console.log(urlInterna)
function addedClass(){


   ItemMenu.forEach((item)=>{
      const paiItem = item.parentElement
     if(urlExterna== item.getAttribute('href')|| urlInterna==item.getAttribute('href') ){
        paiItem.classList.add('ativo')
     
     
     }
  
  })
  
 
}

addedClass();




