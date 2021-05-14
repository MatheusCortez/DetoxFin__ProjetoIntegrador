const url = window.location.pathname;
const btn_login = document.querySelector('.btn_login');
const btn_cadastrar = document.querySelector('.btn_cadastrar');


function addedClass(){
   if(url== '/users/auth'){
      btn_login.classList.add('ativo')
      
   }else if(url =='/users/new'){
      btn_cadastrar.classList.add('ativo')
   }
}

addedClass();
