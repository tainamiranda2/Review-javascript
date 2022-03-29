//conta no banco

class Conta {
  //tipoConta: 'Poupança',
constructor(saldo)  {
this.saldo=saldo;
}
  //metodo
  Deposito (valor) {
   this.saldo+=valor;
  }
  Saque(valor){
    this.saldo-=valor;
  }
}

//iniciando com valor
let conta = new Conta(2000);

conta.Deposito(1000);

console.log("O valor atual:",conta.saldo);

conta.Saque(50);

console.log("O valor apos o saque", conta.saldo)



