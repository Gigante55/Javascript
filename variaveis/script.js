const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
