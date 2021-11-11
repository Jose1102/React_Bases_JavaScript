// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${ nombre }`;

}



// Funcion de flecha o lamba
const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;

}

const saludar3 = (nombre) =>  `Hola, ${ nombre }`;



console.log(saludar2("Jose"));
console.log(saludar3("Anderson"));

// Tarea 
// 1. Transformar la funcion a flecha
// 2. Tiene que retornar un objeto implicito
// Probarlo

/*function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre

    }
};*/

const usuario1 = (nombre) => 
     ({
        uid: 'ABC567',
        username: nombre

    })


const usuarioActivo = usuario1('Pastor');
console.log(usuarioActivo)