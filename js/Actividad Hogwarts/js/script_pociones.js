document.querySelector("#clase-pociones").addEventListener("submit", manejarCreacionPocion);

function manejarCreacionPocion(event) {
    event.preventDefault();

    const crisopos = document.querySelector("#crisopos").value;
    const tallosDescurainiaSophia = document.querySelector("#tallos-descurainia-sophia").value;
    const minutos = document.querySelector("#minutos").value;

    const resultado = validarPocion(crisopos, tallosDescurainiaSophia, minutos);
    mostrarResultadoPocion(resultado);
}

function mostrarResultadoPocion(resultado) {
    const resultadoElemento = document.querySelector("#resultado");
    
    resultadoElemento.textContent = resultado.mensaje;
    resultadoElemento.style.color = resultado.color;
}

function validarPocion(crisopos, tallosDescurainiaSophia, minutos) {
    const resultado = { mensaje: "", color: "" };

    if (crisopos === "2" && tallosDescurainiaSophia === "1" && minutos === "5") {
        resultado.mensaje = "Poción Felix Felicis preparada con éxito!";
        resultado.color = "green";
    } else {
        resultado.mensaje = "La poción no se preparó correctamente. Puede ser peligrosa!";
        resultado.color = "red";
    }

    return resultado;
}
