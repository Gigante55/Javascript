const img = document.querySelectorAll("img");
console.log(img);

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

const animais = document.querySelector(".animais-descricao");
const h2Animais = animais.querySelector("h2");

console.log(animais);
console.log(h2Animais);

const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[--paragrafos.length]);
