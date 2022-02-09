let ubicacionPrincipal = window.pageYOffset;

AOS.init();

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document
  .querySelectorAll(".hamburguer")[0]
  .addEventListener("click", function () {
    if (semaforo) {
      document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
      semaforo = false;
    } else {
      document.querySelectorAll(".hamburguer")[0].style.color = "#000";
      semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos");
  });
