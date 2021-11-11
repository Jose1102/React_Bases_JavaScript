// Desestructuracion
// Asignación desestructurante

const persona = {
    nombre :  'Jose',
    edad : 23,
    clave : 'jos123'

};

//const {nombre , edad, clave} = persona;


/* console.log(nombre);
console.log(edad); 
console.log(clave); */


const retornaPersona = ({nombre,edad}) => {
    //const {nombre , edad, clave} = usuario;

    console.log(nombre,edad)

}


retornaPersona(persona);



