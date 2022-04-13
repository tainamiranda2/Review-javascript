//lançar caso tenh aerro
function sayName(name =''{
if(name===''){
  throw new Error("nome é necessario")
}
  console.log("Depois do erro")
  
})
//pegar o erro

try{
  sayName()
  
} catch(e){
  console.log(e)
}
console.log("apos o erro")