var cerrar = document.getElementsByClassName("cerrar");

for(var i = 0; i<cerrar.length; i++){
 cerrar[i].addEventListener("click",cerrarImagen)
}

function cerrarImagen(){
 var div= this.parentElement;
 div.style.display = "none";
}

var btnRestaurar = document.getElementById("btnRestaurar");
btnRestaurar.addEventListener("click", restaurarImagenes);

function restaurarImagenes(){
 for(var i = 0; i<cerrar.length; i++){
   cerrar[i].parentElement.style.display = "inline-block";
 }
}

var textoIzq = document.getElementById("izq");
var textoDer = document.getElementById("der");
var cont = 0;
//Función que verifica los links
var btn1=document.getElementById("1");
var btn2=document.getElementById("2");
    btn1.addEventListener("click",verificaClick,true);
    btn2.addEventListener("click",verificaClick,true);


function verificaClick (event) {
 cont++;//Contador que aumenta cada que entra a la función
 var obj = event.target;//Obtiene el elemento que detona el evento
 if(cont%2 != 0){
   ocultar(obj);
 }
 else if (cont%2 == 0) {
   mostrar(obj);
 }
}
// Función para ocultar elementos
function ocultar(obj) {
 if(obj.id == 1){//Caso boton Origen
   textoIzq.style.visibility = "hidden";
 }
 else if(obj.id == 2){//Caso boton Exhibición
   textoDer.style.visibility = "hidden";
 }
}
// Función para mostrar el texto
function mostrar(obj) {
 if(obj.id ==1){//Caso boton Origen
   textoIzq.style.visibility = "visible"
 }
 else{//Caso boton Exhibición
   textoDer.style.visibility = "visible";
 }
}