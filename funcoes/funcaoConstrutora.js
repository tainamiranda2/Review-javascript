//expressao new
//criar um aobjeto
//this keyword
function Person(name){
  //refenciar o que esta fora
  this.name=name;
}
const mayk=new Person("Maik")
const jorge=new Person("Jorge")
const felipe=new Person("Felipe")

console.log("Vendo",mayk)
console.log("Vendo",jorge)
  console.log("Vendo",felipe)