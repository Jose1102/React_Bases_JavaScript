import { heroes } from '../data/heroes';

//console.log(heroes);

export const getByIdElem = (id) => {
    return heroes.find( heroe => heroe.id == id);
}

//console.log(getByIdElem(3));


// Tarea
// 1. Retornar los elemenetos con un owner 
// USAR filter


export const getByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner == owner);
}

//console.log(getByOwner('DC'));