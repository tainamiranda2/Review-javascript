//Propriedades únicas que não podem ser alterads e nem criadas duas vezes

class Moto {
  constructor(Marca, Motor, cor){
    this.Motor=3.0;
    this.cor=cor;
  }
  Marca(){
    console.log('Honda')
  }
}

Moto.prototype.cor='preto';

let MotoCG= new Moto('2.0', 'Azul');

console.log(MotoCG.Marca);

MotoCG.Marca();