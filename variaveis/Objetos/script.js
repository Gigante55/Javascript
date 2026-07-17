// const pessoa = new Object({
//   nome: 'André'
// })

// console.log(pessoa)

// const carro = {
//   rodas: 4,
//   init(valor) {
// this.marca = valor;
// return valor;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro).init('Hondas');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());


// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro);

// console.log(moto)

const moto = {
  capacete: true,
}


Object.defineProperties(moto, {
rodas: {
  enumerable: true,
get() {
return this._rodas;
},
set(valor) {
this._rodas = valor * 4 + 'Total Rodas'
}
}
})

console.log(moto)

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

Object.getOwnPropertyNames(Array.prototype)

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(''));
console.log(Array.prototype);

const frutas1 = ['Banana', 'Pêra'];