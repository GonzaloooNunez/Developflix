import peliculas from "./peliculas.js";

/*con el filter cojo las pelis del genero 28*/

const peliculasAccion = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(28)
);

const peliculasThriller = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(53)
);
const peliculasAventura = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(12)
);

const containerAccion = document.getElementById("genero-28");
const containerThriller = document.getElementById("genero-53");
const containerAventura = document.getElementById("genero-12");

/* en esta funcion creamos un elemento div con un h4 que se rellena con el titulo de una pelicula*/

function createDivPelicula(datos) {
  const peli = document.createElement("div");
  const titulo = document.createElement("h4");
  titulo.innerHTML = datos.original_title;
  const imagen = document.createElement("img");
  imagen.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${datos.poster_path}`
  );
  peli.appendChild(titulo);
  peli.appendChild(imagen);
  return peli;
}

/* con esta funciuon recorremos las peliculas, generamos un div y lo añadimos al container*/
function addPeliculaADiv(listaPelis, containerPelis) {
  for (let i = 0; i < listaPelis.length; i++) {
    const peliculaActual = listaPelis[i];
    const divPelicula = createDivPelicula(peliculaActual);
    containerPelis.appendChild(divPelicula);
  }
}

addPeliculaADiv(peliculasAccion, containerAccion);
addPeliculaADiv(peliculasThriller, containerThriller);
addPeliculaADiv(peliculasAventura, containerAventura);
