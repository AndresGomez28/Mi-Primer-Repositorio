document.addEventListener("DOMContentLoaded", () => {
  showmovies();
});

const datosInput = document.querySelector(".buscador");
datosInput.addEventListener("input", getData);

function getData() {
  const search = datosInput.value;
  let url = `http://www.omdbapi.com/?apikey=9cd11c8d&s=${search}`;

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((movieData) => {
      console.log(movieData);
      showmovies(movieData.Search);
    });
};

function showmovies(movieData) {
  const cardsContainer = document.querySelector(".contenedor-cards");
  cardsContainer.innerHTML = "";

  movieData.forEach((movie) => {
    const movieHtml = document.createElement("div");
    movieHtml.innerHTML += `
    <div class="card">
      <img src="${movie.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">${movie.Year}</p>
        <a href="#" class="btn btn-primary">${movie.Type}</a>
      </div>
    </div>
    `;
    cardsContainer.appendChild(movieHtml);
  });
};
