/*
 * Archivo principal de JS
 */

var barraNav = document.getElementById("barra-nav");

document.addEventListener("scroll", function() {
  if(windows.scroll > 50) {
    cambiarColorBotonNav();
  } else {
    volverAEstiloOriginal();
  }
});

//Modal

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-imagen");
var imagenes = [];
var cierra = [];


for (var i=0; i <= 6; i++){
    imagenes[i] = document.getElementsByClassName("mostrar")[i];
    imagenes[i].addEventListener("click", desplegar);
}


function desplegar() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

for (var i = 0; i <= 6; i++){
 cierra[i]=document.getElementsByClassName("close")[0];
 cierra[i].addEventListener("click",cerrar);
}


function cerrar() {
 modal.style.display = "none";
}