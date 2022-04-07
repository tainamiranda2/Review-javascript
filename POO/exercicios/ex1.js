//compras
class Carrinho {
  constructor(itens, qtd, valort){
    this.itens=itens;
    this.qtd;
    this.valort=valort;
  }
}

//itens no carrinho
let carrinho = new Carrinho([
  {
    id:01,
    nome:'Camisa',
    qtd:1,
    preco:20
  },
  {
    id:02,
    nome:'Calça',
    qtd:1,
    preco:50
  }
],3,120)

console.log(carrinho)