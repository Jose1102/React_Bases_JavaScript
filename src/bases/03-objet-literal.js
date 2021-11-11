
const persona = {
    nombre : 'Jose',
    apellido : 'Castro',
    edad : 23,
    direccion : {
        pais : 'Colombia',
        ciudad : 'Bogota'

    }

};

const persona2 = { ...persona };

persona2.nombre = 'Andres';
//console.table(persona);
console.log(persona);
console.log(persona2);