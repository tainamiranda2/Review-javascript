//variavel, condição e incremento
/*for (let i =0; i < 50; i =i +3){
  console.log(`A soma de i com 2 é: ${i+2}`)
}*/
//said[a com break 
nome="Matheus"
for (let i =0; i< 5; i=i +1 ){
  //let nome="Matheus";
  if(i ==3){
  nome="João"
  console.log('joao')
  }else{
    console.log('pedro')
  }
  console.log(i)
}
//usando continue
for(let i =10; i > 0; i=1 -1){
  if(i % 2 ==0){
    console.log("Caiu no continue")
    continue
  }
  console.log(i)
}
//forma resumida de incrementar