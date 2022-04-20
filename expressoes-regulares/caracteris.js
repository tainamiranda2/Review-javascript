//aceitar os caracteries
const PontoRegex=/./
//aceita qualqeur coisa
console.log(PontoRegex.test("hjg"))
const dRegex=/\d/
//false
console.log(PontoRegex.test("hjg"))
//true
console.log(PontoRegex.test("123"))

const sRegex=/\s/
//false
console.log(sRegex.test(" "))

const wRegex=/\w/

console.log(wRegex.test(" "))
