console.log(Number.isNaN("ds"));
console.log(Number.isNaN(10.4343434));

console.log(parseFloat("32434.4343"));
console.log(parseFloat("100.27 reais"));
console.log(parseInt("100.27 reais", 10));
console.log(parseInt(23.49, 10));

const preco = 10.32323;
console.log(preco.toFixed());
const valor = 48.49;

let valor = 48.49;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valor);
