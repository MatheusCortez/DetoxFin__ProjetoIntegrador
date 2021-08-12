var option = document.getElementById('tipo');
var gasto = document.getElementById('gasto')
var ganho = document.getElementById('ganho')



option.onchange = function() {

    if (option.value === ''){
        for ( var i = 0; i < carteira.length; i ++){
            if ( carteira[i].entradaSaida == ' '){
                carteira[i] 
            }
        }
    }
    else if ( option.value==='ganho') {
        for ( var i = 0; i < carteira.length; i ++){
            if ( carteira[i].entradaSaida == 'ganho'){
                carteira[i] 
            }
        }
        
        

          
    } else if (option.value==='gasto'){
    
        for ( var i = 0; i < carteira.length; i ++){
            if ( carteira[i].entradaSaida == 'gasto '){
                carteira[i] 
            }
        }

    }
}

  