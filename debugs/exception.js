//exceptions para mostrar erros
function saudacao(nomme){
  if(typeof nome != 'string'){
   throw new Error('Precisa ser uma string');
  }else{
    console.log(`Olá ${nome}`);
  }
}
saudacao("matheus")
saudacao(5)