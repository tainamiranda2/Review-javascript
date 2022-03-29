
/*var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // Ordenando o array. 
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      console.log( results.push(sorted_arr[i]))
    }
}*/
let vetorA = [1, 3, 5, 7, 9, 3, 11, 7, 1, 11];
console.log('VetorA original ==>',vetorA)
let vetorB = [];


//retirando elementos iguais do vetorA[];
vetorA.forEach((elemem =>{
    if(!vetorB.includes(elemem)){
     console.log( vetorB.push(elemem))
    }
}));

/*