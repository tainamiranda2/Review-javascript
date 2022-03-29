//verificsando quem é o pai do objeto

class Mamifero {
  constructor(patas){
    this.patas=patas;
  }
}

let coiote = new Mamifero(4)
console.log(coiote.patas);
//class criada baseada em outra
class Cachorro extends Mamifero {
  constructor(patas,raca){
  
    super(patas, patas)
    this.raca=raca;
  }
  
  latir(){
    console.log("Au au")
  }
}

let pug = new Cachorro(4, "pug");
console.log(pug.patas);

//vendo se é o pai e resposta deve ser true
console.log(new Cachorro instanceof Mamifero);