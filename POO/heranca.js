//class que herda atributos de outra class
//clas pai
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