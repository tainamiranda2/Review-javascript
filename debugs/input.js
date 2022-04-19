//controlar os dados enviados

//exemplo verifando se não é um número
function checarNum(num){
  let number=Number(num);
  if(Number.isNan(number))
 console.log("Digite apenas numeros."){
    }else{
      return number;
    }
}

checarNum(5)
checarNum("ip")

let number=prompt("Digite um númeor?");

checarNum(number)