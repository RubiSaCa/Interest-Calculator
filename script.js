function compute()
{

alert("Hello how are you doing?");

    p = document.getElementById("principal").value;
	multiplicar();
    
function multiplicar(){
  m1 = document.getElementById("rate").value;
  m2 = document.getElementById("years").value;
  r = m1*m2;
  r2 = m1*m2;
  document.getElementById("result").textContent = r;
  document.getElementById("resultado").value = r2;
  alert(r);
  return r;
}
    
}

function showtime() {
  var now = new Date();
  alert(now);
}
