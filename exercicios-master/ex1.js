//notas de um jeito diferente
let score =90;
function getScore(score){
  

let scoreA=score>=90 && score <=100;
let scoreB=score>=80 && score <=89;
let scoreC=score>=70 && score <=79;
let scoreD=score>=60 && score <=69;
let scoreF=score<=60 && score <=10;

let scoreFinal;
if(scoreA){
  scoreFinla= "A"
}else if(scoreB){
  scoreFinla= "B"
}else if(scoreC){
  scoreFinla= "C"
}else if(scoreD){
  scoreFinla= "D"
}else if(scoreF){
  scoreFinla= "F"
}else{
   scoreFinla= "Nota final invalida"
}
return scoreFinal
  }

