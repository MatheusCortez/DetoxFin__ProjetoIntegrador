const fs = require('fs')
const path = require('path')

function lerNoDisco() {
    const str = fs.readFileSync(path.join(__dirname, 'usuarios.json'))
    const obj = JSON.parse(str)

    return obj
}

module.exports.cadastrar =(usuario) =>{
    const usuarios = lerNoDisco()
    usuarios.push(usuario)
    salvaNoDisco(usuarios)
}



function salvaNoDisco(dado){
   const str = JSON.stringify(dado)
    fs.writeFileSync(path.join(__dirname,'usuarios.json'),str)
}

 module.exports.buscarUsuario = (email) => {
    const usuarios = lerNoDisco()
    return usuarios.find(usuarios => usuarios.email === email)
 
}