const nombre = 'Cecilia';
const apellido = 'Alegre';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log (nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log (`Esto es un texto: ${getSaludo( nombre )}`);