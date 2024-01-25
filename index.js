let arriba = "";
let abajo = "";

function Mostrar(param1) {
  arriba = arriba + param1;
  abajo = abajo + atob("XHg=") + param1.charCodeAt(0).toString(16);
  document.getElementById("Resultado1").innerHTML = arriba;
  document.getElementById("Resultado2").innerHTML = abajo;
}
function Limpiar() {
  arriba = "";
  abajo = "";
  document.getElementById("Resultado1").innerHTML = "";
  document.getElementById("Resultado2").innerHTML = "";
}
