// Variables y constantes 

const nombre = 'Cecilia';
const apellido = 'Alegre';

let valorDado = 5;
valorDado = 4;

console.log ( nombre, apellido, valorDado);

//var No se debe usar...
//Tener en cuenta el scope de la variable let

if ( true ) {
    const nombre ='Peter';
    console.log (nombre)
}

console.log (valorDado);