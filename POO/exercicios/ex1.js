//conta no banco

class Conta {
  //tipoConta: 'Poupança',
constructor(saldo)  {
this.saldo=saldo;
}
  //metodo aumentar o saldo
  Deposito (valor) {
   this.saldo+=valor;
  }
  //metodo diminuir o saldo
  Saque(valor){
    this.saldo-=valor;
  }
}

//iniciando com valor
//intaciaddo
let conta = new Conta(2000);

conta.Deposito(1000);

console.log("O valor atual:",conta.saldo);

conta.Saque(50);

console.log("O valor apos o saque", conta.saldo)

