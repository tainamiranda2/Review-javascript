//guarda o valor e mostra em algum momento

let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value)=> {console.log(`O valor é ${value}`)})