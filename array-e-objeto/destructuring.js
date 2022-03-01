//definir variáveis com propriedades do objeto com uma notação diferente e também com array

let obj ={
  rodas:4,
  portas:4,
  tetosolar:true,
  motor: '2.3'
}

const {rodas: vRodas,
      portas: vPortas,
       tetosolar: vTeto,
       motor: Vmotor
      } = obj;

console.log(vRodas);

console.log(obj);

console.log("-------------------------");

let numeros=[2,3,4,5];

let [num1,num2,num3,num4]=numeros;

console.log(num1);
console.log(num2);
console.log(num3)
console.log(num4)