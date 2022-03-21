//Prototype também podem sem chamadoos de clases.
//pode criar varios objetos  em cima do prototype

let cachorro = {
  patas:4,
  raca: 'Viralata',
  latir: function() {
    console.log("Au au");
  }
}

let labrador = Object.create(cachorro);

//primeiro objeto cirado
labrador.latir();
labrador.raca="Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.latir();
pastor.raca="Pastor Alemão";
//segundo objeto cirado
console.log(pastor.raca);