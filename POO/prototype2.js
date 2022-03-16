const pessoa = {
  maos: 2,
  dedos: 20,
  olhos: 2,
}

//herdado dados do objeto
const pessoaNova= Object.create(pessoa);

//exibindo
console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

