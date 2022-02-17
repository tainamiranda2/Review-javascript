//objeto herdar todas as característica do outro

let objetoA= {
  pontos: "10"
};

let objetoB = objetoA;

console.log(objetoA==objetoB)

objetoB.pontos="5"

console.log(objetoA.pontos)
