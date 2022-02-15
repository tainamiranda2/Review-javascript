//copiado propriedades de um objeto

let carro ={
  portas:2,
  postamalas: '200l',
  motor: '2.0'
}

let adicionais ={
  tetosolar: true,
  arconcionado: true
}

console.log(carro)

Object.assign(carro, adicionais);

console.log(carro)