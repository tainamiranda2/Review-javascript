//eventos com botão
let btn1=document.querySelector("#btn1");

let btn2=document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
  console.log("Apertouo botão")
});

btn1.addEventListener("mouseup", function(){
  console.log("Soutou botão")
});

btn2.addEventListener("dbclick", function(){
  console.log("Clicou duas vezes")
})

btn2.addEventListener("contextmenu", function(e){
  e.preventDefault();
  console.log("Botão direito");
});

//mais eventos com mouse
window.addEventListener("mousemove", function(e){
  console.log(e.x);
  console.log(e.y);

})