//adicionar e deletar
let onibus={
  rodas: 8,
  limite: 30,
  portas: 2
}

console.log(onibus)
console.log("-----------")
//deletando
delete onibus.rodas
console.log(onibus)
console.log("-----------")

//adicionado
onibus.janelas = 20;
console.log(onibus)
console.log("-----------")