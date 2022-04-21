//duas instruções
const reg=/\w+:(Matheus|João|Maria)/;
//true
console.log(reg.test("Nome: Matheus"));
//false
console.log(reg.test("Nome: Maik"));