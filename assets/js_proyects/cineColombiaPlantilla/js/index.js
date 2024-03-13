const logo = document.querySelector('body header .logo');
logo.src = "./img/cc.jpg"

const menu = document.querySelector('header nav');
menu.innerHTML = `
<a>Cartelera</a>
<a>Pronto</a>
<a>Cine Alternativo</a>
<a>Comidas</a>
`;

const busqueda = document.querySelector('header');
busqueda.children[2].children[0].placeholder = "Buscar Pelicula"

const ciudad = document.querySelector('header')
ciudad.children[3].textContent = "Medellin";

const titulo = document.querySelector('.container');
titulo.children[0].textContent = "Cine Colombia - Peliculas";

const peliculaUno = document.querySelector('.container');
peliculaUno.children[1].children[0].children[0].src = "./img/gato.jpg"

const tituloUno = document.querySelector('.container');
tituloUno.children[1].children[0].children[1].textContent = "Gato con Botas";

const peliculaDos = document.querySelector('.container');
peliculaDos.children[1].children[1].children[0].src = "./img/ballena.jpg"

const tituloDos = document.querySelector('.container');
tituloDos.children[1].children[1].children[1].textContent = "La Ballena";

const peliculaTres = document.querySelector('.container');
peliculaTres.children[1].children[2].children[0].src = "./img/houston.jpg"

const tituloTres = document.querySelector('.container');
tituloTres.children[1].children[2].children[1].textContent = "Whitney Houston";

const peliculaCuatro = document.querySelector('.container');
peliculaCuatro.children[1].children[3].children[0].src = "./img/conejo.jpg"

const tituloCuatro = document.querySelector('.container');
tituloCuatro.children[1].children[3].children[1].textContent = "Academia de Conejos";