jugador1_nombre=localStorage.getItem("jugador1_nombre");
jugador2_nombre=localstorage.getitem("jugador2_nombre");

jugador1_puntaje=0;
jugador2_puntaje=0;

document.getElementById("jugador1_nombre").innerHTML=jugador1_nombre+":";
document.getElementById("jugador2_nombre").innerHTML=jugador2_nombre+":";

document.getElementById("jugador1_puntaje").innerHTML=jugador1_puntaje;
document.getElementById("jugador2_puntaje").innerHTML=jugador2_puntaje;

document.getElementById(jugador_pregunta).innerHTML="turno para preguntar"+ jugador1_nombre;
document.getElementById(jugador_respuesta).innerHTML="turno para responder"+ jugador2_nombre;

function enviar()
{
    get_word=document.getElementById("palabra").value;
    palabra=get_word.toLowrCase();
    console.log("palabra en minusculas =" + palabra);

    charAt1=palabra.charAt(1);
    console.log (charAt1);
}