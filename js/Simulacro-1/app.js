const apiUrl = 'https://api.spacexdata.com/v3/launches';

async function obtenerLanzamientos() {
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();

    cardsLanzamientos(datos);
};

function cardsLanzamientos(lanzamientos) {
    let html = "";

    lanzamientos.forEach(lanzamiento => {
        html += `
        <div class="card">
            <img src="${lanzamiento.links.mission_patch_small}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${lanzamiento.mission_name}</h5>
                <p class="card-text">${lanzamiento.launch_year}</p>
                <button type="button" onclick="cardLanzamiento('${lanzamiento.flight_number}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver Info-Mision</button>
            </div>
        </div>
        `;
    });

    document.getElementById('lanzamientos').innerHTML = html;
};

async function cardLanzamiento(numeroVuelo) {
    const respuesta = await fetch(`${apiUrl}/${numeroVuelo}`);
    const datos = await respuesta.json();
    let modalHtml = document.querySelector('.modal-content')
    modalHtml.innerHTML = "";
    modalHtml.innerHTML = `
    <div class="modal-header">
        <h5 class="modal-title">SPACEX</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p>Space Exploration Technologies Corp</p>
        <iframe width="465" height="315" src="https://www.youtube.com/embed/${datos.links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Nombre de la misión: ${datos.mission_name}</p>
        <p>Año de Lanzamiento: ${datos.launch_year}</p>
        <p>Número de Vuelo: ${datos.flight_number}</p>
        </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="cerrarModal()">Cerrar</button>
    </div>
    `;

    document.getElementById('abrirModal').innerHTML = modalHtml;
}

obtenerLanzamientos();
