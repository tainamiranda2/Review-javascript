var x=10;
var y=15;

if(y>10){
  var x=5;
  console.log(x)
}

console.log('jeito antigo',x)

//novo jeito de trablahr com array funcion
//jeito antigo
const sum = function sum (a,b){
  return a+b
}
console.log(sum(5,5))
//jeito novo
const arrowSum=(a,b)=> a+b


console.log(arrowSum(5,5))

const greeting=(name)=>{
  if(name){
    return 'Olá' + name+ '!'
  }else{
    return 'Olá'
  }
}

console.log(greeting('Tainá'))