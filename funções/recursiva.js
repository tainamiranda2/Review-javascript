//funcção recursiva
function recursao(n){

if(n-1==2){
  console.log("Recursão parou"+n)
}else if(n%2!=0){
  console.log("numero impar"+n)
}else{
  console.log(n - 2)
}

}
//se auto chama
recursao(1)
recursao(9)
recursao(10)