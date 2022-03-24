//Propriedades únicas que não podem ser alterads e nem criadas duas vezes

class Moto {
  constructor(Marca, Motor, cor){
    
    this.Motor=3.0;
    this.cor=cor;
  }
 
}

let Motor= Symbol();
Moto.prototype[Motor]=2.6;

console.log(Moto.prototype[Motor])
