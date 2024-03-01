//Caso 1
let dineroDisponible = 2500000;

// Compra de comida en el aeropuerto
let opcionComida = ["almojabana", "subway", "nada"];
let opcionElegida = opcionComida[Math.floor(Math.random() * opcionComida.length)];

if (opcionElegida === "almojabana") {
  dineroDisponible -= 15000;
  console.log("Almojábana con gaseosa: Le caerá mal, dinero restante:", dineroDisponible);
} else if (opcionElegida === "subway") {
  dineroDisponible -= 23000;
  console.log("Subway con gaseosa: Estará llenito y bien, dinero restante:", dineroDisponible);
} else {
  console.log("No compra nada, dinero restante:", dineroDisponible);
};



//Caso 2
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Tamaño permitido por la aerolínea
let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

// Calcular factores de reducción
let ReduccionAlto = altoPermitido / altoOriginal;
let ReduccionLargo = largoPermitido / largoOriginal;
let ReduccionAncho = anchoPermitido / anchoOriginal;

// Encontrar el factor de reducción más pequeño
let factorReduccion = Math.min(ReduccionAlto, ReduccionLargo, ReduccionAncho);

// Calcular nuevas dimensiones ajustadas
let nuevoAlto = altoOriginal * factorReduccion;
let nuevoLargo = largoOriginal * factorReduccion;
let nuevoAncho = anchoOriginal * factorReduccion;

console.log("Nuevas dimensiones ajustadas:", "Alto:" ,nuevoAlto, "-Largo:" ,nuevoLargo, "-Ancho:" , nuevoAncho);


//Caso 3
let wifiAeropuerto = "01110010_01101001_01110111_01101001";

// Convertir binario a decimal y luego a caracteres
let wifiPasswordDecimal = parseInt(wifiAeropuerto.replace(/_/g, ""), 2);
let wifiPassword = String.fromCharCode(wifiPasswordDecimal);

console.log("La contraseña del Wifi es:", wifiPassword);


//Caso 4
let fraseOriginal = "Taxi me puede llevar al hotel mariposas amarillas";
let fraseConvertida = fraseOriginal.replace(/[aeiou]/gi, "i");

console.log("Traduccion: ", fraseConvertida);


//Caso 5
// Juego papel, piedra o tijera con el taxista
let opciones = ["piedra", "papel", "tijera"];
let opcionUsuario = opciones[Math.floor(Math.random() * opciones.length)];
let opcionTaxista = opciones[Math.floor(Math.random() * opciones.length)];

// Eleccion de los jugadores
console.log("Hildebrando elige:", opcionUsuario);
console.log("Taxista elige:", opcionTaxista);

//Resultado del juego
if (opcionUsuario === opcionTaxista) {
  console.log("Empate, no pasa nada.");
} else if (
  (opcionUsuario === "papel" && opcionTaxista === "piedra") ||
  (opcionUsuario === "piedra" && opcionTaxista === "tijera") ||
  (opcionUsuario === "tijera" && opcionTaxista === "papel")
) {
  console.log("Hildebrando gana y no le cobran nada.");
} else {
  console.log("Taxista gana, Hildebrando paga los 300.000.");
  dineroDisponible -= 300000;
}


console.log("Dinero disponible después del taxi:", dineroDisponible);


//Caso 6
let diasEnMacondo = 4;
let hildebrandoVivo = true;
let totalDias = 0;

for (let dia = 1; dia <= diasEnMacondo; dia++) {
  let opcionesVestimenta = ["amarillo", "verde", "roja", "azul"];
  let patronVestimenta = opcionesVestimenta[Math.floor(Math.random() * opcionesVestimenta.length)];

  switch (patronVestimenta) {
    case "amarillo":
      let meterseEnPiscina = Math.random() < 0.5;
      if (meterseEnPiscina) {
        console.log("Día " + dia + ": Se mete en la piscina. Muere. Fin de las vacaciones.");
        hildebrandoVivo = false;
      } else {
        console.log("Día " + dia + ": No se mete en la piscina. Nada especial.");
      };
      break;

    case "verde":
      let hacerCaminataCompleta = Math.random() < 0.5;
      if (hacerCaminataCompleta) {
        console.log("Día " + dia + ": Hace una caminata completa. Llega a la cascada y se toma fotos.");
      } else {
        console.log("Día " + dia + ": No hace la caminata completa. Se devuelve solo y se pierde de noche.");
        hildebrandoVivo = false;
      };
      break;

    case "roja":
      let jugarVoleibol = Math.random() < 0.5;
      if (jugarVoleibol) {
        console.log("Día " + dia + ": Juega voleibol y la pasa genial.");
      } else {
        console.log("Día " + dia + ": No juega voleibol. Nada especial.");
      };
      break;

    case "azul":
      let participarEnBingo = Math.random() < 0.5;
      if (participarEnBingo) {
        console.log("Día " + dia + ": Participa en el bingo y aumenta su dinero.");
        dineroDisponible += 10000;
      } else {
        console.log("Día " + dia + ": No participa en el bingo. Nada especial.");
      }
      break;
  };

  if (!hildebrandoVivo) {
    console.log("Día " + dia + ": Hildebrando ha fallecido. Fin de las vacaciones.");
    break;
  };

totalDias = Math.max(totalDias, dia + 1);

};

console.log(hildebrandoVivo ? "Hildebrando regresó del viaje." : "Hildebrando murió en el viaje.");
console.log("Dinero gastado en las vacaciones:", 2500000 - dineroDisponible);
console.log("Total de días en Macondo: " + totalDias);
