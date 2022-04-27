//espera a promisse ser resolvida e ai mostra o  resultado

function somarDelay(a,b){
  return new Promise(resolve=>{
    setTimeout(function(){
      resolve(a+b)
    }, 4000)
  })
}

async function resSoma(a,b,c){
  let x=somarDelay(a,b)
  let y=c;
  return await x +y;
}

console.log(resSoma(1,2,3).then(value=> console.log(value)))