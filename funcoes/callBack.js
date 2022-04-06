//

function sayMyName(name){
  console.log("Antes de executar uma callback");
  name()
    console.log("Depois de uma callback");
  
}
//posso passar qualquer tipo de dado
//sayMyName('Maik')
//sayMyName({name:'Maik'})

sayMyName(()=>{
    console.log("Estou em uma callback também")
  }
    )