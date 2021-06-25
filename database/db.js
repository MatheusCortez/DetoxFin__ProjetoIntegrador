const {v4:uuidV4} = require('uuid')
const {createHash,compareHash} = require('../controllers/crypFunctions/hash')
const models = require('./models')


module.exports.cadastrar = async function(usuario){
        const novoUsuario = usuario;

        const novoUsuarioCriado =  await models.User.create({
            id:uuidV4(),
            nome:novoUsuario.nome,
            cpf:novoUsuario.cpf,
            telefone:parseInt(novoUsuario.telefone),
            email:novoUsuario.email,
            senha: await createHash(usuario.senha),
            perfilInvestidor:'',
            resultadoPerfilInvestidor:''
        });

        console.log(novoUsuarioCriado)
        return novoUsuarioCriado;
    }




 module.exports.buscarUsuario = async function(usuario) {
     
     console.log('dentro do buscar')
    const {email} = usuario;

    try {
        const emailEncontrado = await models.User.findOne({
            where:{
                email:String(email)
            }
        }) 
        return  emailEncontrado
    } catch (error) {
        console.log(error)
    }
 } 
 



 module.exports.buscarCPF = async function(usuario) {
     
    console.log('dentro do buscar cpf')
   const {cpf} = usuario;

   try {
       const cpfEncontrado = await models.User.findOne({
           where:{
               cpf:String(cpf)
           }
       }) 
       return  cpfEncontrado
   } catch (error) {
       console.log(error)
   }
} 
