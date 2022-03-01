//padrao do tipo de dado

let pessoa ={
  "nome": "Matheus",
  "idade": 28
}

console.log(pessoa.nome);
//trasformando em string
console.log("-------")
let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto);