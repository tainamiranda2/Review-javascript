//saldo da conta com herança
class Conta{
  constructor(ContaC, ContaP, JurosP){
    this.ContaC=ContaC;
    this.ContaP=ContaP;
    this.JurosP=JurosP;
  }
  //metodos
  deposito(valor){
    this.ContaC+=valor;
  }
  saque(valor){
    this.ContaC-=valor;
  }
  //poupar
  transferrencia(valor){
    this.ContaC-=valor;
     this.ContaP+=valor;
  }
  //juros
}

let conta= new Conta(1000, 5000, 1)
/*console.log(conta)
conta.saque(500);
console.log(conta)
conta.deposito(5000);
console.log(conta)
*/
conta.transferrencia(200);
console.log(conta)
