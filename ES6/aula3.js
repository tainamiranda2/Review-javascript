//map é parecido com o filter porém é usuado quando queremos modificar algo
const products=[
  {name:'Camisa', price: 20.00, category: 'Roupas'},
  {name:'bola', price: 10.00, category: 'Brinquedo'},
  {name:'Carrinho', price: 5.90, category: 'Brinquedo'},
  {name:'Calça', price: 130.60, category: 'Roupas'}
]

products.map((product)=>{
  if(product.category==='Roupas'){
    //adifionando promoções
    product.onSale=true
  }
})

console.log(products)