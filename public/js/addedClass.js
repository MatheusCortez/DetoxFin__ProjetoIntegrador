 const menu = document.querySelectorAll('.cabecalho__butons_btn');




 menu.forEach((btn)=>{
    btn.addEventListener('click',addedclass)  
 })


 function addedclass(event){

    menu.forEach((btn)=>{
        btn.classList.remove('ativo')
    })

    
    event.currentTarget.classList.add('ativo')
    console.log(menu)
 }
