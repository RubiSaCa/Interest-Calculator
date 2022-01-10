var Hola2 = document.getElementsByClassName("Hola");
var its = document.getElementById("Sliters").value;
var input = document.querySelector("input[type=range]");
actualizarInput(input);



input.addEventListener("input",function(evt){
  actualizarInput(input)
});

function actualizarInput(input){
  var label = input.parentElement.querySelector("label");
  label.innerHTML = input.value;
  var inputMin = input.getAttribute("min");
  var inputMax = input.getAttribute("max");
  var unidad = (inputMax - inputMin) / 100;
  input.style.setProperty("--value", (input.value - inputMin)/unidad);  
}

function compute(){

  var p = document.getElementById("principal").value;
	multiplicar();
    
function multiplicar(){
  var m1 = document.getElementById("principal").value;
  var m2 = document.getElementById("years").value;

  r = m1*m2*((input/100)+1);

  parseInt(r);
  Hola2.innerText = r;
  document.write("If you deposit " + m1 +"\nat an interest rate of " + its + "%\nYou will receive an amount of "+ r + "\n");
  showtime();
  console.log(Hola2);
  return r;
  
}
}

function showtime() {
  var now = new Date();
  document.write("In time " + now);
}
