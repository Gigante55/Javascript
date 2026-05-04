const img = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
    console.log(imagem.offsetWidth);
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};
