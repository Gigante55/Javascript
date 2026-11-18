const promesa = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao) {
    setTimeout(()=>{
      resolve({nome: 'Andre', idade: 28});
    }, 1000)
  } else {
    reject(Error('Um erro ocorreu na promise'))
  }
});

const retorno = promesa.then(resolucao => {
  console.log(resolucao);
  return 'Teste'
})

console.log(retorno)