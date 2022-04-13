//abastecer
class Carro {
  constructor(marca, cor, gasolina,consumo){
    this.marca=marca;
    this.cor=cor;
    this.gasolina=gasolina;
   this.consumo=consumo;
  }
  //diminuir gasolina
  dirigir(km){
    let litrosconsumidos=km/this.consumo;
    
 this.gasolina-=litrosconsumidos;
  }
  //aumentar gasolina
  abastecer(litros){
    this.gasolina+=1;
  }
}

let carro=new Carro('Gol', 'Cinza', 100, 14);
console.log(carro)
carro.dirigir(100)
console.log(carro)

carro.abastecer(10)
console.log(carro)
