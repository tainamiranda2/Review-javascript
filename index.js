let teste={
  nome: 'calos',
  nome3: 'calos1',
  nome2: 'calos3'

}

Object.keys(teste).forEach(function(item){
  console.log(item + ':'+ teste[item])
})

let teste1=[
  {
    nome: 'marcos'
    },
  {
    nome: 'marcos1'
    },
]

const index=teste1.findIndex((element)=>element.nome==="marcos1");
console.log(index)
