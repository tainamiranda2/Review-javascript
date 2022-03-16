//um objeto de outro objeto, o pai do objeto

const pessoa = {
  maos: 2,
}

//vendo o proptotype 
console.log(Object.getPrototypeOf(pessoa));

//objetct é o prototype
console.log(Object.getPrototypeOf(pessoa)=== Object.prototype);

//herdando prootype mesmo n criando metodo

console.log(pessoa.hasOwnProperty('maos'))