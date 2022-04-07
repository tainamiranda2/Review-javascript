//e-commerce
class E_commerce{
  constructor(qtd,valorTotal,itens){
    
this.qtd=qtd;
this.valorTotal=valorTotal;
this.itens=itens;
  }
  //metodo adicionar itens/produtos
  additem(item){
    let contador=0;
    //this.carrinho+=produto;
  for(let itemCarrinho in this.itens){
    if(this.itens[itemCarrinho].id==item.id){
      this.itens[itemCarrinho].qtd+=item.qtd;
        contador=1;
      }
    }
    if(contador ==0){
      this.itens.push(item);
    }
this.qtd+=item.qtd;
this.valorTotal+=item.preco * item.qtd;
    }
  }
  
//
let e_commerce= new E_commerce([
  {
    id: 01,
    nome: "Camisa",
    qtd:1,
    preco:20
  },
  {
    id: 02,
    nome: "Calça",
    qtd:1,
    preco:50
  },
  
],3, 120);

//console.log(e_commerce);
//testando
e_commerce.additem({
  id:01,
  nome: "Camisa",
  qtd:3,
  preco:20
  
})
e_commerce.additem({
  id:02,
  nome: "Calça",
  qtd:3,
  preco:40
  
})

console.log(e_commerce)
 