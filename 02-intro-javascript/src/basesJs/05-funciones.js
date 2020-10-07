//funciones en JS
// const saludar = function ( nombre ) {
//     return `Hola, ${ nombre }`;
//}

// function saludar ( nombre ) {
//     return `Hola, ${ nombre }`;
// }

//saludar = 20 , si se declara de esta manera, la variable o la constante saludar pisa la funcion declarada 
// Usar la función de flecha evita que se se mezclen las referencias

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;
//No se acostumbra a usar parentesis porque es un valor primitivo 
//que se usa facilmente

//console.log ( saludar )
console.log ( saludar2('Cecilia') );
console.log ( saludar3('María') );
console.log ( saludar4() );

const getUser = () => ({
        uid: 'ABCD123',
        username: 'anon_123'
    });

const user = getUser();
console.log(user);

// console.log( getUser() );

//Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un obj implícito
// 3. Pruebas 

// function getUsuarioActivo( nombre ) {
//     return {
//         uid:'abcdef',
//         username: nombre,
//     }
// }

const getUsuarioActivo = ( nombre ) => ({
        uid:'abcdef',
        username: nombre,
    })


const usuarioActivo = getUsuarioActivo( 'Cecilia' );
console.log ( usuarioActivo );