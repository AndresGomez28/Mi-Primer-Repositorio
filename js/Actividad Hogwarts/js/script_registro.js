document.addEventListener("DOMContentLoaded", function () {
    // Cargamos el estudiante desde localStorage al iniciar
    const estudiante = Estudiante.cargarLocalStorage();
    mostrarInformacionEstudiante(estudiante);
});

document.querySelector("#formulario-hogwarts").addEventListener("submit", function (event) {
    event.preventDefault();

    // Creación de un nuevo estudiante desde el formulario
    const estudiante = new Estudiante();
    estudiante.nombre = document.querySelector("#nombre").value;
    estudiante.edad = parseInt(document.querySelector("#edad").value);
    estudiante.familia.padre = document.querySelector("#padre").value;
    estudiante.familia.madre = document.querySelector("#madre").value;
    estudiante.linaje = document.querySelector("#linajes").value;
    estudiante.cualidades.push(document.querySelector("#cualidad").value);

    // Guardar el estudiante en localStorage antes de cambiar de página
    estudiante.guardarLocalStorage();

    // Redireccionar a info.html
    window.location.href = 'info.html';
});

function mostrarInformacionEstudiante(estudiante) {
    const infoNombre = document.querySelector("#info-nombre");
    const infoEdad = document.querySelector("#info-edad");
    const infoPadre = document.querySelector("#info-padre");
    const infoMadre = document.querySelector("#info-madre");
    const infoLinaje = document.querySelector("#info-linaje");
    const infoCasa = document.querySelector("#info-casa");

    infoNombre.textContent = estudiante.nombre || '';
    infoEdad.textContent = estudiante.edad || '';
    infoPadre.textContent = estudiante.familia.padre || '';
    infoMadre.textContent = estudiante.familia.madre || '';
    infoLinaje.textContent = estudiante.linaje || '';

    determinarCasa(estudiante, infoCasa);
}

function determinarCasa(estudiante, infoCasa) {
    let casa = '';

    if (
        (estudiante.cualidades.includes("Valor") ||
            estudiante.cualidades.includes("Fuerza") ||
            estudiante.cualidades.includes("Audacia")) &&
        (estudiante.linaje.includes("Mestizo") ||
            estudiante.linaje.includes("Muggle") ||
            estudiante.linaje.includes("Sangre Pura"))
    ) {
        casa = "Gryffindor";
    } else if (
        (estudiante.cualidades.includes("Justicia") ||
            estudiante.cualidades.includes("Lealtad") ||
            estudiante.cualidades.includes("Paciencia")) &&
        (estudiante.linaje.includes("Mestizo") ||
            estudiante.linaje.includes("Muggle"))
    ) {
        casa = "Hufflepuff";
    } else if (
        (estudiante.cualidades.includes("Creatividad") ||
            estudiante.cualidades.includes("Erudicion") ||
            estudiante.cualidades.includes("Inteligencia")) &&
        (estudiante.linaje.includes("Mestizo") ||
            estudiante.linaje.includes("Muggle") ||
            estudiante.linaje.includes("Sangre Pura"))
    ) {
        casa = "Ravenclaw";
    } else if (
        (estudiante.cualidades.includes("Ambicion") ||
            estudiante.cualidades.includes("Determinacion") ||
            estudiante.cualidades.includes("Astucia")) &&
        estudiante.linaje.includes("Sangre Pura")
    ) {
        casa = "Slytherin";
    }

    estudiante.casa = casa;
    infoCasa.textContent = casa;
}
