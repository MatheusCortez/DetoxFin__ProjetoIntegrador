const form = document.forms[0]
const button = document.querySelector('.btn')

function validateFields(event){
   
    const target = event.target;
    if(!target.checkValidity()|| target.validity.valueMissing ||target.value.length < 3){
        console.log(target.getAttribute('name'))
        let classElemento= target.getAttribute("class")
        let elementName = target.getAttribute("name")
        target.className=`${classElemento}--invalid`
        target.nextElementSibling.innerText = `${elementName} está invalido`

    }else if(target.checkValidity()){
        target.className=`${classElemento}`
        target.nextElementSibling.innerText = ""
    }
    


}

form.addEventListener('change',validateFields)

