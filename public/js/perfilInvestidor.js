const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
console.log('foi')

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

const radioBtn = document.querySelectorAll('[type = "radio"]')

for ( var i = 0; i < radioBtn.length; i++ ) {
  radioBtn[i].addEventListener('change', (e) => {
    for ( var j = 0; j < radioBtn.length; j++){
      if (!radioBtn[j].checked) {
        radioBtn[j].parentNode.classList.remove('selecionado')
      }
     
    }
    e.target.parentNode.classList.add('selecionado')
  })
}

