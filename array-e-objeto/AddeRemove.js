//pop, push, shift, unshift
let nomes=["Matheus",  "Lucas", "Pedro"];
//remove
let elementoRemovido=nomes.pop()

console.log(elementoRemovido);
console.log("Nome removido:" +nomes)
//adiciona 
nomes.push("leo")
console.log("nome colocado:" +nomes)

//remover o primeiro

let removerPrimeiro=nomes.shift()
console.log("Nome no inicio removido:" +nomes)

let adiciona=nomes.unshift("marcos")
console.log("Nome adicionado:"+nomes)