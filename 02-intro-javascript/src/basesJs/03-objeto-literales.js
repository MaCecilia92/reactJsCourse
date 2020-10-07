const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12456,
        lat: 14.5687,
        lng: 14.9874,
    }
};

//console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log ( persona );
console.log ( persona2 );