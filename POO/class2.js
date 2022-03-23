//não pode adiconar propriedades fora do consttrutor
//a calss só aceita métodos

class Macaco {
  constructor(raca, patas, cor){
    this.raca=raca;
    this.cor=cor;
  }
  comida(){
    console.log('Banana')
  }
}

Macaco.prototype.patas=4;
let MicoLeao= new Macaco('MicoLeao', 'Preto');

console.log(MicoLeao.patas);

MicoLeao.comida();