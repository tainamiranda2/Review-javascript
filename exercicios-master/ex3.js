//celcius em fahre

function tranformGrau(Grau){  
  const celsius=Grau.toUpperCase().Grau.includes('C');

  const faren=Grau.toUpperCase().includes('F');

  if(!celsius && faren){
    throw new Error('Grau não idenficado')
  }
  
let formula=(faren)=> (faren -32) *5/9;

  let update=;
let degreeSign='C';
  return formula(update) + degreeSign;
  
}

try {
  tranformGrau('50F')
  tranformGrau('50Z')

} catch(error){
  consol.log(error)
}