//filtar dados baseados em condições
const arr=[1,2,3,4,5]

const higNumbs=arr.filter((n)=>{
  if(n >=3){
    return n;
  }
  
})

console.log(higNumbs)

const users=[
  {name: 'Matheus', avalible:true}, 
  {name: 'Tainá', avalible:true}, 
  {name: 'Julha', avalible:true}, 
  {name: 'Bruna', avalible:false}
            ]

//return já esta implicito
const avaliableUsers=users.filter((user)=> user.avalible)

console.log(avaliableUsers)