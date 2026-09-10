export default function initAnimaNumeros() {

}

const numeros = document.querySelectorAll('[data-numero]');

numeros.forEach((numero) => {
  const total = +numero.innerText;
  const inscremento = total / 100;
  let start = 0;
  const timer = setInterval(() => {
    start = start + inscremento;
    numero.innerText = start;
    if(start > total)
      clearInterval(timer)
  }, 25) 
  console.log(total)
})