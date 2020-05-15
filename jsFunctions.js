document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementsByTagName("a")[0].addEventListener("click", circulo);
    circulo()
});

function circulo() {
    var cambiando = 0;
    var quedando = 0;
    var intentos = document.getElementsByTagName("input")[0].value;
    var contenido = "";
    for (let a = 0; a < intentos; a++) {
        var puertas = [0, 1, 2]
        var elegido = Math.floor(Math.random() * 3);
        var premio = Math.floor(Math.random() * 3);

        for (let i = 0; i < puertas.length; i++) {
            if (puertas[i] == elegido) {
                puertas[i] = 1;
            } else if (puertas[i] == premio) {
                puertas[i] = 2;
            } else {
                puertas[i] = 0;
            }
        }

        if (premio == elegido) {
            quedando++;
        }

        for (let i = 0; i < puertas.length; i++) {
            if (puertas.indexOf(1) == i) {
                puertas[i] = "o";
            } else if (puertas.lastIndexOf(0) == i) {
                puertas[i] = "x";
            } else {
                if (i == premio) {
                    cambiando++
                }
            }

        }
        contenido += " [" + puertas + "] ";
    }
    document.getElementById("puertas").innerHTML = contenido;
    document.getElementById("quedando").innerHTML = "quedandote la misma puerta: " + quedando;
    document.getElementById("cambiando").innerHTML = "cambiando de puerta: " + cambiando;
}