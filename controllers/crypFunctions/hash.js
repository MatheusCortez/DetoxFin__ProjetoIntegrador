const bcrypt= require('bcrypt')


module.exports.createHash  = async function encriptarSenha(senha) {
    const salt =  await bcrypt.genSalt(10)
    return await  bcrypt.hash(senha,salt)
  
  }

  module.exports.compareHash = async function (senha, hash) {
    return resultadoSenha= await bcrypt.compare(senha, hash);
  };