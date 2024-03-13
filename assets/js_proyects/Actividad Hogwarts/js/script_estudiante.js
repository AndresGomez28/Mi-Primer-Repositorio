class Estudiante {
    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.familia = {
            padre: "",
            madre: "",
        };
        this.linaje = "";
        this.casa = "";
        this.animalPatronus = "";
        this.cualidades = [];
    }

    guardarLocalStorage() {
        localStorage.setItem('estudiante', JSON.stringify(this));
    }

    static cargarLocalStorage() {
        const datos = localStorage.getItem('estudiante');
        if (datos) {
            const obj = JSON.parse(datos);
            const estudiante = new Estudiante();
            Object.assign(estudiante, obj);
            return estudiante;
        }
        return new Estudiante();
    }
}

const estudiante = new Estudiante();

