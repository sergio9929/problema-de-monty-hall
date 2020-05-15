document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("puertasabiertas").value = 1;
    document.getElementById("num_puertas").value = 3;
    document.getElementById("intentos").value = document.getElementById("num_puertas").value * 1000;
    circulo();
    for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
        document.getElementsByTagName("a")[i].addEventListener("click", circulo);

    }
});

function circulo() {
    var cambiando = 0;
    var quedando = 0;
    var intentos = document.getElementById("intentos").value;
    var contenido = "";
    var num_puertas = document.getElementById("num_puertas").value;
    var puertasabiertas = document.getElementById("puertasabiertas").value;
    for (let a = 0; a < intentos; a++) {
        var puertas = [];
        for (let k = 0; k < num_puertas; k++) {
            puertas[k] = k
        }
        var puertas2 = puertas.slice(0);

        var elegido = Math.floor(Math.random() * num_puertas);
        var premio = Math.floor(Math.random() * num_puertas);
        puertas[premio] = "p";
        puertas[elegido] = "o";
        puertas2.splice(elegido, 1)
        puertas2.splice(puertas2.indexOf(premio), 1)

        for (let i = 0; i < puertasabiertas; i++) {
            let quitarpuerta = Math.floor(Math.random() * puertas2.length);
            puertas[puertas2[quitarpuerta]] = "x";
            puertas2.splice(quitarpuerta, 1)
        }

        if (premio == elegido) {
            quedando++;
        }

        var puertas3 = puertas.slice(0);
        puertas3.splice(elegido, 1)
        for (let i = 0; i < puertasabiertas; i++) {
            let index = puertas3.indexOf("x")
            puertas3.splice(index, 1)
        }
        if (puertas3[Math.floor(Math.random() * puertas3.length)] == "p") {
            cambiando++;
        }

        contenido += " [" + puertas + "] ";
    }
    document.getElementById("puertas").innerHTML = contenido;
    document.getElementById("quedando").innerHTML = "quedandote la misma puerta: " + quedando + " / " + Math.round(quedando / intentos * 100 * 10) / 10 + "%";
    document.getElementById("cambiando").innerHTML = "cambiando de puerta: " + cambiando + " / " + Math.round(cambiando / intentos * 100 * 10) / 10 + "%";
}