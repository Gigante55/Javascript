// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   array[index] = "Teste";
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// const retornoForeach = li.forEach((item, index) => {
//   item.classList.add("ativa" + index);
// });

// console.log(retornoForeach);

const carros = ["Ford", "Fiat", "Honda"];

carros.map((item, index, array) => {
  console.log(item, index, array);
});
