//uma forma de uma função receber indefinidos pametros
let num =1;
let num1 =5;
let num2 =3;
let num3 =4;

function imprimir(...args){
  for(let  i=0; i < args.length; i++){
    console.log(args[i])
  }
}

imprimir(num, num1,num2);
console.log("Pause");
imprimir(num2, num3);
console.log("Pause");
imprimir(2,4,5,6,7,8)