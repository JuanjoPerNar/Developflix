
import peliculas from './peliculas.js';

console.log(peliculas);

const contenedorAccion = document.getElementById('genero-28');
const contenedorThriller = document.getElementById('genero-53');
const contenedorAventura = document.getElementById('genero-12');

const peliculasAccion = peliculas.filter(function(pelicula) {
    return pelicula.genre_ids.includes(28);
});
const peliculasThriller = peliculas.filter(function(pelicula){
    return pelicula.genre_ids.includes(53)
});
const peliculasAventura = peliculas.filter(function(pelicula) {
    return pelicula.genre_ids.includes(12)
});

function mostrarPeliculas(peliculasFiltradas, contenedor) {
    contenedor.innerHTML = '';
    peliculasFiltradas.forEach(function(pelicula) {
        const imagenURL = 'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path;
        const divPelicula = document.createElement('div');
        divPelicula.classList.add('pelicula');
        divPelicula.innerHTML = '<img src="' + imagenURL + '" alt="' + pelicula.title + '">' + '<h3>' + pelicula.title + '</h3>';
        contenedor.appendChild(divPelicula);
    });
}

mostrarPeliculas(peliculasAccion, contenedorAccion);
mostrarPeliculas(peliculasThriller, contenedorThriller);
mostrarPeliculas(peliculasAventura, contenedorAventura);
