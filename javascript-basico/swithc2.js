function calculate(num1, operador, num2){
  let result 
  switch(operador){
    case '+':
      result= num1+num2
      break
      
      case '-':
      result= num1-num2
      break
      
      case '*':
      result= num1*num2
      break
      
      case '/':
      result= num1/num2
      break
      
    default:
      onsole.log("Não implementado");
      break;
  }
  return result;
}
console.log(calculate(4, '+', 6))