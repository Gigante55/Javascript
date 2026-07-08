const perimetro = new Function('lado', 'return lado * 4');


function somar(n1, n2, n4) {
  return n1 + n2;
}

console.log(somar.name)

function darOi(nome) {
  console.log('Oi para você' = nome)
}

darOi.call({}, 'Andre');