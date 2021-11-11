const Api_key = 'dWkJCUBIGPR5IO9iOhoLWHSFdu2pkXUo';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ Api_key }`);

peticion
    .then( resp => resp.json())
    .then( ({ data } ) => {
        const { url }    =  data.images.original;

        const img = document.createElement('img');
        img.src = url;

        
        document.body.append( img );
    })
    .catch(console.warn);