//get serve para resgatar valor de uma propriedade

//set serve para alterar o valor de uma propriedade

class Camisa {
  constructor(Polo, Cor){
    this.Polo=Polo;
    this.Cor=Cor;
    
  }
  Cor(){
    console.log("Verde");
  }
  get getCor(){
    return this.Cor;
  }
  set setCor(Cor){
  this.Cor;
  }
}

let Marca= new Camisa('John John', 'Verde');
console.log(Marca)