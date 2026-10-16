var estadoDeLaLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoDeLaLicuadora == "apagada") {
        estadoDeLaLicuadora = "encendida";
        hacerBrrBrr();
        /* console.log ("me prendiste"); */
        licuadora.classList.add("active");
      }  else  {
       estadoDeLaLicuadora = "apagada";
       hacerBrrBrr();
       licuadora.classList.remove("active");
       /*console.log ("me apagaste"); */
       }
    }


    function hacerBrrBrr() {
        if (estadoDeLaLicuadora.paused) {
            botonLicuadora.play();
            sonidoLicuadora.play();
        } else {
            botonLicuadora.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }

        }