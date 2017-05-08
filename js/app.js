/*
 * Archivo principal de JS
 */

var barraNav = document.getElementsByClassName("btn-nav");

document.addEventListener("scroll", function() {
  if(window.scrollY > 1850) {
      cambiarCOlorBotonDosNav ()
  } else if (window.scrollY > 1500) {
    cambiarColorBotonUnoNav();
  } else if (window.scrollY > 700) {
    cambiarColorBotonCeroNav();    
  } else {
    devolverBotonesAEstiloOriginal();
  }
});

function cambiarColorBotonCeroNav() {
	barraNav[0].style.background = "#18BC9C";
    barraNav[1].style.background = "#2c3e50";
    barraNav[2].style.background = "#2c3e50";
}


function cambiarColorBotonUnoNav () {
    barraNav[1].style.background = "#18BC9C";
    barraNav[0].style.background = "#2c3e50";
    barraNav[2].style.background = "#2c3e50";
}


function cambiarCOlorBotonDosNav () {
    barraNav[2].style.background = "#18BC9C";
    barraNav[1].style.background = "#2c3e50";
}

function devolverBotonesAEstiloOriginal() {
    barraNav[0].style.background = "#2c3e50"; 
    barraNav[1].style.background = "#2c3e50";
    barraNav[2].style.background = "#2c3e50";
}

console.log(scrollY);

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