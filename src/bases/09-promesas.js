import { getByIdElem } from './bases/08-imp-exp';

// Para enviar argumentos de la promesa al then y catch


/* const promesa   = new Promise( (resolve, reject) =>{
    setTimeout( () => {
        // Tarea
        // Importar getByIdElem de 08-imp-exp.js
        const p1  = getByIdElem(5);
        resolve(p1);
        //reject( 'No se pudo encontrar el heroe' );
    } , 2000);
});


promesa.then( (heroe) => {
    console.log('Entra al then de la promesa', heroe);
})
.catch( err => console.warn(err)); */


// Para enviar argumentos del then y catch a la promesa

const getHeroeByIdAsync = ( id ) => {
    const promesa   = new Promise( (resolve, reject) =>{
        setTimeout( () => {
            // Tarea
            // Importar getByIdElem de 08-imp-exp.js
            const p1  = getByIdElem( id );
            
            if(p1 == undefined){
                reject('No se pudo encontrar al heroe');

            }else{
                resolve(p1);
            }
            
        } , 2000);
    });

    return promesa;

}

getHeroeByIdAsync(10)
.then(console.log)
.catch(console.warn);
