//um objeto de outro objeto, o pai do objeto

const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));

console.log(Object.getPrototypeOf(pessoa)=== Object.prototype);