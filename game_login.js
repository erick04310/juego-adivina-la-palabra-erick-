function addusuario()
{
jugador1_nombre=document.getElementById("nombre_jugador1").Value;
jugador2_nombre=document.getElementById("nombre_jugador2").value;

localStorage.setitem("jugador1_nombre", jugador1_nombre);
localStorage.setItem("jugador2_nombre", jugador2_nombre);

window.location="game_page.html";

}