function ver(dado){
  if (typeof dado==="string"){
    console.log("Este dado é uma string");
  }else if(typeof dado==="number"){
  console.log("Tipo number")
  }else{
console.log("Tipo boolean")
  }

}
ver(true)
ver(90)
ver("ola")