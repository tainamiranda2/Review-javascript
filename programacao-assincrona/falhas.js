//promisses pode falhar

/*let p = Promise.resolve(new Error("Não deu certo"));

console.log('lalala');

p.then(value=> console.log(value));

.catch(reason=> console.log("Falhou:" +reason));
*/
//rejeitando codigo

function verificar(num){
  return new Promise((resolve, reject)=>{
  if(num ==2){
    resolve(console.log( `O número é ${num}`))
  }else{
    reject(new Error("Falhou"))
  }
});
  }

verificar(2)
verificar(3)
verificar(6)