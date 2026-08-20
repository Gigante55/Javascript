const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
  setTimeout(() => {
    console.log(this)
    this.classList.add('active');
  }, 1000)
}

setTimeout(function() {
console.log('Testando')
}, 0);

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i)
// }