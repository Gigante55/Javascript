function teste(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abraçou";
  };
  this.andar = function () {
    return "Andou pelo objeto";
  };
}

var obj = {
  nome: "Nadre",
  idade: 33,
};

Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + "Pessoa nadou";
};

const andre = new Pessoa("Andre", 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);
