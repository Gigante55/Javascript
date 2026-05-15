const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD);

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
