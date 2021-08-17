function gerarTipos(value) {
    var tipo = document.getElementById('tipo')
    

    var option = ''

    if ( value == '') {

        limparOpcoes()

    } else if ( value == 'fixa') {

        limparOpcoes()

        option = document.createElement('option');
        option.value = ''
        option.text = ''
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'tesouroDireto'
        option.text = 'Tesouro Direto'
        option.id ='tesouroDireto'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'titulosPrivados'
        option.text = 'Titulos Privados'
        option.id = 'titulosPrivados'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'fundoInvestimentoFixa'
        option.text = 'Fundo de Investimento'
        option.id = 'fundoInvestimentoFixa'
        tipo.add(option)


    } else if ( value == 'variavel') {

        limparOpcoes()

        option = document.createElement('option');
        option.value = ''
        option.text = ''
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'fundoInvestimentoVariavel'
        option.text = 'Fundo de Investimento'
        option.id = 'fundoInvestimentoVariavel'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'acoes'
        option.text = 'Ações'
        option.id = 'acoes'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'fundoImobiliario'
        option.text = 'Fundo Imobiliario'
        option.id = 'fundoImobiliario'
        tipo.add(option)
    }

}


  function limparOpcoes() {
    var opcoesTipos = document.getElementById('tipo')

    while ( opcoesTipos.length ) {
        opcoesTipos.remove(0)
    }
 
}

const type = document.querySelector('#renda').value


window.addEventListener('load', function () {
    
    gerarTipos(type)
    
})
  