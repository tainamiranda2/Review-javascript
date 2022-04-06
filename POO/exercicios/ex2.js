//e-commerce
class E_commerce{
  constructor(qtd,valorTotal,itens){
this.qtd=qtd;
    this.valorTotal=valorTotal;
    this.itens=itens;
  }
  //metodo adicionar itens/produtos
  additem(item){
    //this.carrinho+=produto;
    for(let itemCarrinho in this.itens){
      if(this.itens[itemCarrinho].id==item.id){
        this.itens[itemCarrinho].qtd+=item.qtd;
      }
    }
      this.qtd+=item.qtd;
this.valorTotal+=item.preco * item.qtd;
    }
  }
  //metodo para remover itens
   /*Compras(produto){
    this.carrinho-=produto;
  }*/


let e_commerce= new E_commerce([
  {
    id: 01,
    nome: "Camisa",
    qtd:1,
    preco:40
  },
  
],1, 120);

console.log("Vendo o que tem no carrinho: ",e_commerce);
//testando
e_commerce.additem({
  id:01,
  nome: "Camisa",
  qtd:3,
  preco:20
  
})


console.log("Vendo novamente",e_commerce)
 