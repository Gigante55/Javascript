const pessoa = new Object({
  nome: 'André'
})

console.log(pessoa)

const carro = {
  marca: 'Marca',
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.marca = 'Honda';