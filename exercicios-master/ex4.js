//objetos
const booksByCategory=[
  {
    category: 'Riliquia',
    books:[
      {
        title: "Os segredos da mente",
        autor: "Marcos",
        
      },
      {
        title: "Os segredos da mente do programado",
        autor: "Pedro",
        
      },
      {
        title: "Os segredos da mente do macaco",
        autor: "Carlos",
        
      },
    ]
  },

  {
    category: 'Inteligencia',
    books:[
      {
        title: "Os segredos da culinaria",
        autor: "Marcos",
        
      },
      {
        title: "Os segredos da mente do mexico",
        autor: "Pedro",
        
      },
      {
        title: "Os segredos da mente do italia",
        autor: "Carlos",
        
      },
    ]
  },
]

const totalCategorias=booksByCategory.length;
console.log(totalCategorias)
//pegando uma categoria dentro do arrar
for(let category of booksByCategory){
  console.log('Total de livros da categoria.', category.category);

  console.log(category.books.length)
}


//numeros de autores
function countAuthors(){
  
}