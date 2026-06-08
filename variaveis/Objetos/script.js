// const comida = "Pizza";
// const agua = new String("Agua");

// console.log(agua.length);

// const frase = "A melhor comida";

// console.log(frase[frase.length]);
// console.log(frase.charAt(frase.length));

const frase = "A melhor linguagem é";
const linguagem = "JavaScript";

const fraseFinal = frase.concat(linguagem, "!!", "Oi");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(listaFrutas));

console.log(fruta.endsWith("na"));
console.log(fruta);

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(-5));

console.log(fruta.indexOf("na"));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});
