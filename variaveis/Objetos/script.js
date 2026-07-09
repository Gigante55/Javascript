// const perimetro = new Function('lado', 'return lado * 4');


// function somar(n1, n2, n4) {
//   return n1 + n2;
// }

// console.log(somar.name)

// function darOi(nome, idade) {
//   console.log('Oi para você' + nome + idade)
// }

// darOi.call(null, 'Andre', 28);

// window.marca = 'Carro';
// window.ano = 288

// function descricaoCarro(velocidade) {
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + velocidade);
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pêra']

carros.forEach.call(frutas, (item) => {
  console.log(item)
})

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
this.element.classList.add(classe)
}

const ul = new Dom('ul');

console.log(ul.element);