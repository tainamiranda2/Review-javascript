//e-commerce
class E_commerce{
  constructor(carrinho, valorTotal,itens){
    this.carrinho=carrinho;
    this.valorTotal=valorTotal;
    this.itens=itens;
  }
  //metodo adicionar itens/produtos
  Compras(item){
    //this.carrinho+=produto;
    for(let itemCarrinho in this.itens){
      if(this.itens[itemCarrinho].id==itens.id){
        this.itens[itemCarrinho].carrinho+=itens.carrinho;
      }
      this.carrinho+=item.carrinho;
this.valorTotal+=itens.preco * item.carrinho;
    }
  }
  //metodo para remover itens
   /*Compras(produto){
    this.carrinho-=produto;
  }*/
}

let e_commerce= new E_commerce([
  {
    id: 01,
    nome: "Açucar",
    carrinho:2,
    preco:3.60
  }
],
                               3, 200);

/*e_commerce.Compras('Feijão');
e_commerce.Compras('Salame');
e_commerce.Compras('Pao');
e_commerce.Compras('Queijo');
*/
console.log("Vendo o que tem no carrinho: ",e_commerce);

