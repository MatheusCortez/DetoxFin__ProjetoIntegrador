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
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'titulosPrivados'
        option.text = 'Titulos Privados'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'etfFixa'
        option.text = 'ETF de Renda Fixa'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'fundoInvestimentoFixa'
        option.text = 'Fundo de Investimento'
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
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'etfVariavel'
        option.text = 'ETF de Renda Variável'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'fundoImobiliario'
        option.text = 'Fundo Imobilario'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'acoes'
        option.text = 'Ações'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'bdrs'
        option.text = 'BDRs'
        tipo.add(option)

        option = document.createElement('option');
        option.value = 'derivativos'
        option.text = 'Derivativos'
        tipo.add(option)
    }
}

function limparOpcoes() {
    var opcoesTipos = document.getElementById('tipo')

    while ( opcoesTipos.length ) {
        opcoesTipos.remove(0)
    }
}