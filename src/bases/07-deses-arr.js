const personajes = ['Goku','Vegeta','Trunks'];


const [ , , p1] = personajes;

console.log(p1)

const arreglo = () => {
    return ['ABC',123];
}

const [ letras , numeros] = arreglo();
console.log(letras, numeros);

//Tarea
// 1. el primer valor del arr se llamará  nombre
// 2. se llamara setNombre


const des = ( valor ) => {
    return [ valor , ()=>{ console.log('Hola mundo')}];

}

const [nombre, setNombre] = des('Pastor');

console.log(nombre);
setNombre();