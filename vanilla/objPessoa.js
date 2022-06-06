//interrelação entre objeto

let person ={
  name:"Lucas",
  age:30,
  contaC:123
}

let operation={
  
  sacar: function(saldo, valor){
  return saldo-=valor;
  },
  
  depositar: function(saldo, valor){
    return saldo+=valor;
  }
  
}

let bank={
  person: person,
  operation:operation,
  saldo: 50
}

//interação

let value=20;
console.log(
  bank.person.name+ ":" + "Portador da conta" +"="+bank.person.contaC+"Realizou um saque de:"
);

//