const getImagen = async() => {

    try {

        const Api_key = 'dWkJCUBIGPR5IO9iOhoLWHSFdu2pkXUo';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ Api_key }`);
        const {data} = await resp.json();

        // Tarea
        // 1. Mostrar la imagen del ejercicio 10-fecth.js

        const { url }  = await data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

        
    } catch (error) {

        //Manejo del error
        console.error(error);
        
    }
    
    
    
}

getImagen()
