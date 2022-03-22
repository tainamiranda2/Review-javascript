//melhor maneira de criar um objeto

//instaciar um objeto é o mesmo que crir uma class

class Cachorro{
  constructor(raca, patas, cor, porte){
    this.raca=raca;
    this.patas=patas;
    this.cor=cor;
    this.porte=porte;
    
  }
}

let labrador=new Cachorro('Viralata', 4, 'Preto', 'Medio');

console.log(labrador)