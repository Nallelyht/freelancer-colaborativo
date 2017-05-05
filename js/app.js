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