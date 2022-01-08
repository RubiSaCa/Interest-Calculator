var Hola2 = document.getElementsByClassName("Hola");

function compute()
{

alert("Hello how are you doing?");

    var p = document.getElementById("principal").value;
	multiplicar();
    
function multiplicar(){
  var m1 = document.getElementById("principal").value;
  var m2 = document.getElementById("years").value;
  var its = document.getElementById("Sliters").value;
  r = m1*m2*((its/100)+1);

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
