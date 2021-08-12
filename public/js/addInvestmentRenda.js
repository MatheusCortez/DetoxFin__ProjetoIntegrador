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

    }

    console.log(tipo)
    tipo.value = option.value
    console.log(JSON.parse('<%- tipo %>'))

}


  function limparOpcoes() {
    var opcoesTipos = document.getElementById('tipo')

    while ( opcoesTipos.length ) {
        opcoesTipos.remove(0)
    }
    QtesouroDireto.classList.add('no-display')
    QtitulosPrivados.classList.add('no-display')
    QfundoInvestimentoFixa.classList.add('no-display')
     QfundoInvestimentoVariavel.classList.add('no-display')
}

const type = document.querySelector('#renda').value

console.log(type)

window.addEventListener('load', function () {
    
    gerarTipos(type)
    
})
  