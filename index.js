
function main  (num)  {
    // Code here
  let numeros = new Array();
  for (var i = 0; i <= num; i++) {
    if (primo(i)){
      numeros.push(i);
    }
  }
  return numeros;
}

function primo(num) {
  for(let i = 2; i <num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}
console.log(main(1000))
