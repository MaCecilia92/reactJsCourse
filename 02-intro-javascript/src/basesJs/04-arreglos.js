//Arreglos en JS
// const arreglo = new Array (100) => ejemplo de una opción 
//válida pero que no se recomienda

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [ ...arreglo,5];
// arreglo2.push(5);
const arreglo3 = arreglo2.map( function( numero ) {
    return numero * 2;
} )

console.log( arreglo  );
console.log( arreglo2 );
console.log( arreglo3 )

//cada función en JS cuando no tienen una return explícito devuelve undefined 