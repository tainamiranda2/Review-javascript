
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
var arr = [1,2,2,3,4,5,5,5,6,7,7,8,9,10,10];

function arrayNovo(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}

console.log(arrayNovo(arr));*/