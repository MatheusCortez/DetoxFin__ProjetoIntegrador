var option = document.getElementById('tipo');
var gasto = document.getElementById('gasto')
var ganho = document.getElementById('ganho')
var questGanho = document.getElementById('questionarioGanho')
var questGasto = document.getElementById('questionarioGasto')

option.onchange = function() {
    
    if ( option.value==='ganho') {
        
        questGanho.classList.remove('no-display')
        questGasto.classList.add('no-display')
        

          
    } else if (option.value==='gasto'){
    
        questGasto.classList.remove('no-display')
        questGanho.classList.add('no-display')
        

    }
}
