

function recomendar(genero){
    let elementoEdad = document.getElementById('textoEdad');
    let edad = elementoEdad.value;

    let elementoRecomendacion = document.getElementById('textoRecomendacion');
    switch(genero){
        case 'terror':
            if(edad < 13){
                elementoRecomendacion.textContent = "Caroline";
            }
            else{
                if(edad < 16){
                    elementoRecomendacion.textContent = "Chucky";
                }
                else{
                    elementoRecomendacion.textContent = "El Conjuro Y el Exorcista";
                }                
            }
    }
}