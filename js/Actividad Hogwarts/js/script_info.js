document.addEventListener("DOMContentLoaded", function () {
    mostrarInformacionEstudiante();
});

function mostrarInformacionEstudiante() {
    const estudiante = Estudiante.cargarLocalStorage(); // Cargar el estudiante desde localStorage

    const infoNombre = document.querySelector("#info-nombre");
    const infoEdad = document.querySelector("#info-edad");
    const infoPadre = document.querySelector("#info-padre");
    const infoMadre = document.querySelector("#info-madre");
    const infoLinaje = document.querySelector("#info-linaje");
    const infoCasa = document.querySelector("#info-casa");
    const infoAnimalPatronus = document.querySelector("#info-animal-patronus");

    if (!infoNombre || !infoEdad || !infoPadre || !infoMadre || !infoLinaje || !infoCasa || !infoAnimalPatronus) {
        console.error("No se pudo encontrar uno o más elementos del DOM.");
        return;
    }

    infoNombre.textContent = estudiante.nombre || '';
    infoEdad.textContent = estudiante.edad || '';
    infoPadre.textContent = estudiante.familia.padre || '';
    infoMadre.textContent = estudiante.familia.madre || '';
    infoLinaje.textContent = estudiante.linaje || '';
    infoCasa.textContent = estudiante.casa || '';
    infoAnimalPatronus.textContent = estudiante.animalPatronus || '';
}
    

document.getElementById("nombre").innerText = estudiante.nombre;
document.getElementById("edad").innerText = estudiante.edad;
document.getElementById("familia").innerText = estudiante.familia;
document.getElementById("linaje").innerText = estudiante.linaje.join(", ");
document.getElementById("casa").innerText = estudiante.casa;
document.getElementById("animalPatronus").innerText = estudiante.animalPatronus;
document.getElementById("cualidad").innerText = estudiante.cualidad.join(", ");

const clasesProfesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

class ClaseTransformaciones {
    constructor(profesor, horario) {
        this.profesor = profesor;
        this.horario = horario;
        this.boggartTransformado = false;
    }

    realizarTransformacionRiddikulus() {
        if (this.boggartTransformado) {
            console.log("El boggart ya ha sido transformado.");
        } else {
            console.log("¡Transformando el boggart con Riddikulus!");
            this.boggartTransformado = true;
        }
    }

    enfrentarBoggart(boggart) {
        console.log(`Forma original del boggart: ${boggart}`);
        this.realizarTransformacionRiddikulus();
        console.log(`Boggart transformado: ${boggart} ya no da miedo.`);
    }
}

let claseTransformaciones = new ClaseTransformaciones(clasesProfesores.transformaciones, "Horario de la clase");

let boggartEjemplo = "Dementor";

claseTransformaciones.enfrentarBoggart(boggartEjemplo);

class DefensaContraLasArtesOscuras {
    constructor(profesor, estudiante) {
        this.profesor = profesor;
        this.estudiante = estudiante;
        this.generarAnimalPatronus();
    }

    generarAnimalPatronus() {
        const animalesPatronus = ["León", "Ciervo", "Fénix", "Lobo", "Águila"];
        this.estudiante.animalPatronus = animalesPatronus[Math.floor(Math.random() * animalesPatronus.length)];
    }
}

let claseDefensa = new DefensaContraLasArtesOscuras(clasesProfesores.defensaContraLasArtesOscuras, estudiante);


