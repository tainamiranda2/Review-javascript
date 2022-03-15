//interagindo como objeto

const cachorro = {
  raca: 'Viralata',
  uivar: function () {
    console.log('auuuu')
  },
  rosnar: function(){
    console.log('grrrr')
  },
  setRaca: function(raca){
    this.raca=raca
  },
  getRaca: function(){
    return "A raça é:" +this.raca;
  }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca())