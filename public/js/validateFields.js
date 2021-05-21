const form = document.forms[0]
console.log(form)
const button = document.querySelector('.btn')

function validateFields(event){
    event.preventDefault();
    const target = event.target;
    if(!target.checkValidity()|| target.validity.valueMissing ||target.value.length < 3){
        let classElemento= target.getAttribute("class")
        let elementName = target.getAttribute("name")
        target.className=`${classElemento}--invalid`
        target.nextElementSibling.innerText = `${elementName} está invalido`

    }else{
        target.className=`${classElemento}`
        target.nextElementSibling.innerText = ""
    }
    


}

form.addEventListener('change',validateFields)

