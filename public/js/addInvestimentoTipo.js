var renda = document.getElementById('renda')
var option = document.getElementById('tipo')
var tesouroDireto = document.getElementById('tesouroDireto')
var titulosPrivados = document.getElementById('titulosPrivados')
var fundoInvestimentoFixa = document.getElementById('fundoInvestimentoFixa')
var fundoInvestimentoVariavel = document.getElementById('fundoInvestimentoVariavel')

var QtesouroDireto = document.getElementById('QtesouroDireto')
var QtitulosPrivados = document.getElementById('QtitulosPrivados')
var QfundoInvestimentoFixa = document.getElementById('QfundoInvestimentoFixa')
var QfundoInvestimentoVariavel = document.getElementById('QfundoInvestimentoVariavel')


option.onchange = function() {
    if ( option.value == 'tesouroDireto') {
        
        QtesouroDireto.classList.remove('no-display')
        QtitulosPrivados.classList.add('no-display')
        QfundoInvestimentoFixa.classList.add('no-display')
        QfundoInvestimentoVariavel.classList.add('no-display')
        

        

          
    } else if ( option.value == 'titulosPrivados'){
        

        QtesouroDireto.classList.add('no-display')
        QtitulosPrivados.classList.remove('no-display')
        QfundoInvestimentoFixa.classList.add('no-display')
        QfundoInvestimentoVariavel.classList.add('no-display')
        


    } else if ( option.value == 'fundoInvestimentoFixa'){
        

        QtesouroDireto.classList.add('no-display')
        QtitulosPrivados.classList.add('no-display')
        QfundoInvestimentoFixa.classList.remove('no-display')
        QfundoInvestimentoVariavel.classList.add('no-display')
    


    }else if ( option.value == 'fundoInvestimentoVariavel'){
        

        QtesouroDireto.classList.add('no-display')
        QtitulosPrivados.classList.add('no-display')
        QfundoInvestimentoFixa.classList.add('no-display')
        QfundoInvestimentoVariavel.classList.remove('no-display')
      


    } else {
        
        QtesouroDireto.classList.add('no-display')
        QtitulosPrivados.classList.add('no-display')
        QfundoInvestimentoFixa.classList.add('no-display')
        QfundoInvestimentoVariavel.classList.add('no-display')
    
    }
}

