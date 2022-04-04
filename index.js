let x = prompt("á?");

//let x = prompt("Digite um valor?")

if (x >=0 && x <= 25.0000 ){
    document.write("Intervalo [0,25]" );
  
} else if(x >= 25.0000 && x <=50.0000000){
         document.write("Intervalo (25,50]");
  
} else if( x >=50.0000000 && x <=75.0000000){
         document.write("Intervalo (50,75]");

} else if( x >=75.000000000 && x <=100.0000000000){
      document.write("Intervalo (75,100]");     
} else{
         document.write("Fora de intervalo");
}

