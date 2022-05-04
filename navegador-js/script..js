console.log(document.body);

//mover os elementos atraes do dom

console.log(document.boby);
console.log(document.boby.childNodes)
//console.log(document.boby.childNodes[2]..childNodes)

//encontrando elementos id

document.getElementById('alum-id');

//encontrando class
document.getElementsByClassName('alguma-class');
//elementos por query
console.log(documente.querySelector('#container-principal h1'));

//elementos
elementPai.insertBefore(novoelemente, element);

//aterando elementos com appendChild

let p =document.querySelector("#paragrafro-principal");

let pai =p.parentNode;
pai.appendChild(novoElemento);

let element=document.querySelector('#titulo-principal');

console.log(element.offseWidht); //modificando largura
console.log(element.offsetHeight); //modificando altura

let p= document.getElementById('p');

p.style.color='red';
