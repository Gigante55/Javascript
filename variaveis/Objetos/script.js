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
  value: 2,
  configurable: false,
  writable: true,
}
})

moto.rodas;
console.log(moto)
