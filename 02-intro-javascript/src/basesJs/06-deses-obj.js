// Desestructuración de objetos 
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre } = persona;

// console.log (persona.nombre);
// console.log (persona.edad);
// console.log (persona.clave);

// console.log (nombre);
// console.log (edad);
// console.log (clave);

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave : clave, 
        anios : edad,
        latLng: {
            lat: 14.255350,
            lng: -15.456318,
        }
    }
}

const { nombreClave, anios, latLng: { lat, lng} } = useContext ( persona );
// const { lat, lng } = latLng;
console.log ( nombreClave, anios );
console.log ( lat, lng );






