const {v4:uuidV4} = require('uuid')
const {createHash} = require('../controllers/crypFunctions/hash')
const models = require('./models')

module.exports.cadastrar = async function(usuario){
        const novoUsuario = usuario;
       
        const novoUsuarioCriado =  await models.User.create({
            nome: novoUsuario.nome.toLocaleUpperCase(),
            cpf:novoUsuario.cpf,
            telefone:parseInt(novoUsuario.telefone),
            email:novoUsuario.email.toLocaleUpperCase(),
            senha: await createHash(usuario.senha),
            perfilInvestidor:'',
            resultadoPerfilInvestidor:''
        });

        const user = await models.User.findOne({
            where: {
                cpf: novoUsuario.cpf
            }
        })

        const carteriaCriada = await models.carteira.create({
            Usuario_idUsuario:user.idUsuario,
        })

        const investimentoCriado = await models.carteirainvestimentos.create({
            Usuario_idUsuario:user.idUsuario,
        })
        console.log(investimentoCriado, 'investimento')

    }




 module.exports.buscarUsuario = async function(usuario) {
    const {email} = usuario;

    try {
        const emailEncontrado = await models.User.findOne({
            where:{
                email:String(email.toLocaleUpperCase())
            }
        }) 
        return  emailEncontrado
    } catch (error) {
        console.log(error)
    }
 } 
 



 module.exports.buscarCPF = async function(usuario) {
     
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

module.exports.updateUser= async(req,res)=>{
    const {idUsuario} = req.params;
    const novasInfos =req.body;
    await models.User.update(novasInfos,{where:{idUsuario:Number(idUsuario)}})
    const infoAtualzada= await models.User.findOne({where:{idUsuario:Number(idUsuario)}})

    return res.status(200).json(infoAtualzada)

}


