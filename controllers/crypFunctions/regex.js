 module.exports.Formatarcpf= function(cpf){
   const cpfLimpo= cpf.replace(/\D/g,'');
    const cpfFormatado = cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'xxx$2$3xx')
    return cpfFormatado
 }