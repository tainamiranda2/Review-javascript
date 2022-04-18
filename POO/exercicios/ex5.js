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
  jurosdeAniversario(){
    let juros=this.ContaP*this.JurosP/100;
    this.ContaP+=juros;
  }
}

let conta= new Conta(1000, 8000, 1)
/*console.log(conta)
conta.saque(500);
console.log(conta)
conta.deposito(5000);
console.log(conta)
*/
//conta.transferrencia(200);
//nova class
class ContaEspecial extends Conta{
  constructor(ContaC, ContaP, JurosP){
    
    super(ContaC, ContaP, JurosP*2)
      
  }
  
}
conta.jurosdeAniversario()
console.log(conta);

//estanciando
let conta2= new ContaEspecial(10000, 50000,1);

conta2.jurosdeAniversario();
console.log(conta2)
