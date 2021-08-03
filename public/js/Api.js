fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response=>response.json())
.then(dolar=>{
    const dolarPreco = document.querySelector('.usd');
    dolarPreco.innerText= 'Dolar: '+(dolar.USDBRL.high)

})
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response=>response.json())
.then(bitcoin=>{
    const bitcoinPreco = document.querySelector('.btc');
   
    bitcoinPreco.innerText= 'Bitcoin: '+(bitcoin.BTCBRL.high)

})
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response=>response.json())
.then(euro=>{
    const euroPreco = document.querySelector('.eur');
    euroPreco.innerText= 'Euro: '+(euro.EURBRL.high)

})


