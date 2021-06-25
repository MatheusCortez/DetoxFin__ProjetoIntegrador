

const {v4:uuidV4} = require('uuid')
const {createHash,compareHash} = require('../controllers/crypFunctions/hash')
const models = require('./models')
console.log(models)

function lerNoDisco() {
    const str = fs.readFileSync(path.join(__dirname, 'usuarios.json'))
    const obj = JSON.parse(str)

    return obj
}
/*ta recebendo o usuario todavia essa merda de codigo nao encontra as funcioes do sequelize*/
module.exports.cadastrar = async function(usuario){
    console.log('entrou no cadastrar')
    console.log(models)
    const novoUsuario = usuario;
    console.log(novoUsuario)
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
     console.log(usuario)
     console.log('dentro do buscar')
    const {email} = usuario;

    try {
        const emailEncontrado = await models.Usuario.findOne({
            where:{
                email:String(email)
            }
        }) 
        return  emailEncontrado
        console.log('funcionou busca bd')
    } catch (error) {
        console.log(error)
    }
 } 
 
