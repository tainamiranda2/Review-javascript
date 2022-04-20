const reg1=/[12345]/;
//false
console.log(reg1.test("Tesmo o número 6"))
//true
console.log(reg1.test("Tesmo o número 2"))



const reg2 =/[0-9]/
//true
console.log(reg1.test("Tesmo o número 5"))
//true
console.log(reg1.test("Tesmo o número 9"))