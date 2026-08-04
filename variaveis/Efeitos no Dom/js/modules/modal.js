export default function initModal() {

}

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

function abrirModal() {
  event.preventDefault();
  containerModal.classList.add('ativo');
console.log(event);
}

function fecharModal(event) {
  event.preventDefault();
containerModal.classList.remove('ativo');
}

function cliqueForaModal(event) {
  
}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);