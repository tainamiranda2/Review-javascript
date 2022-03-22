//adionar propriedade a um objeto e substituir o prototype

class Gato {
  constructor(cor, raca){
    this.cor=cor;
    this.raca=raca;
  }
  
}
//adicionando
Gato.prototype.raca='siamesa';

const GatoChines= new Gato('gato brasileiro', 'preto')
//acessando
console.log(Gato.prototype.raca);

//
console.log(GatoChines.raca)