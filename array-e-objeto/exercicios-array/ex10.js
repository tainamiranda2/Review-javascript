//objeto calculadora
const cal={
  sub: function (num1,num2){
    return num1-num2;
    
  },
  somar: function (num1, num2) {
    return num1 + num2
  },
  div: function(num1, num2) {
   return num1 / num2
    
  },
  mult: function(num1, num2){
    
  return num1 * num2 
  }

}

console.log(cal.sub(6,2))
console.log(cal.somar(6,2))
console.log(cal.div(6,2))
console.log(cal.mult(6,2))