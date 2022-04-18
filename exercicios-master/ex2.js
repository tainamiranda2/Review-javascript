//gastos familiar
let gastos={
  receitas:[2500, 3000, 250, 360],
  despesas:[500,50, 40,60,600]
}
//calcular
function sum(array){
  let total=0;

  for(let value of array){
    total +=value;
  }
  return total;
}
//

function calcularBalanco(){
  const calcularReceita=sum(gastos.receitas);
calcularDespesas=sum(gastos.despesas);
  //mensagem
  const total=calcularReceita-calcularDespesas;

  const itOk=total>=0;
  let balanceText="Negativo";
  if(itOk){
    balanceText="Positivo";
  }
console.log(`Seu saldo é ${balanceText}: ${total}`)
}
calcularBalanco()
