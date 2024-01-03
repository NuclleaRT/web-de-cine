

function recomendar(genero){
    let elementoEdad = document.getElementById('textoEdad');
    let edad = elementoEdad.value;

    let elementoRecomendacion = document.getElementById('textoRecomendacion');
    switch(genero){
        case 'terror':
            if(edad < 13){
                elementoRecomendacion.textContent = "Coraline";
                const container = document.getElementById('pelicula');
                const img = document.createElement("img");
                img.src = "https://es.web.img3.acsta.net/medias/nmedia/18/68/16/34/19109620.jpg";
                img.alt = "Coraline";

                container.appendChild(img);
           }
            else{
                if(edad < 16){
                    elementoRecomendacion.textContent = "Chucky";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://es.web.img2.acsta.net/pictures/22/06/28/16/32/0141734.jpg";
                    img.alt = "Chucky";
    
                    container.appendChild(img);
                }
                else{
                    elementoRecomendacion.textContent = "El Conjuro";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://mx.web.img3.acsta.net/pictures/19/03/20/19/26/1988298.jpg";
                    img.alt = "El Conjuro";
    
                    container.appendChild(img);
                }                
            }
            break;
        case 'accion':
            if(edad < 13){
                elementoRecomendacion.textContent = "The Lego Movie";
                const container = document.getElementById('pelicula');
                const img = document.createElement("img");
                img.src = "https://pics.filmaffinity.com/La_LEGO_pelaicula-819614387-large.jpg";
                img.alt = "The Lego Movie";
    
                container.appendChild(img);
            }
            else{
                if(edad < 16){
                    elementoRecomendacion.textContent = "Spiderman";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-257260163-large.jpg";
                    img.alt = "El Spiderman";
    
                container.appendChild(img);
                }
                else{
                    elementoRecomendacion.textContent = "John Wick";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://es.web.img3.acsta.net/pictures/16/10/26/08/50/198471.jpg";
                    img.alt = "John Wick";
    
                container.appendChild(img);
                }                
            }
            break;
            case 'infantil':
                if(edad < 13){
                    elementoRecomendacion.textContent = "Paw patrol";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://pics.filmaffinity.com/La_LEGO_pelaicula-819614387-large.jpg";
                    img.alt = "Paw patrol";
        
                    container.appendChild(img);
                }
                else{
                    if(edad < 16){
                        elementoRecomendacion.textContent = "Demon Slayer: Infinity Train";
                        const container = document.getElementById('pelicula');
                        const img = document.createElement("img");
                        img.src = "https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-257260163-large.jpg";
                        img.alt = "Demon Slayer: Infinity Train";
        
                    container.appendChild(img);
                    }
                    else{
                        elementoRecomendacion.textContent = "Todo de estudio Gibli";
                        const container = document.getElementById('pelicula');
                        const img = document.createElement("img");
                        img.src = "https://es.web.img3.acsta.net/pictures/16/10/26/08/50/198471.jpg";
                        img.alt = "Gibli";
        
                    container.appendChild(img);
                    }                
                }
                break;
                case 'musical':
                if(edad < 13){
                    elementoRecomendacion.textContent = "El rey Leon";
                    const container = document.getElementById('pelicula');
                    const img = document.createElement("img");
                    img.src = "https://pics.filmaffinity.com/La_LEGO_pelaicula-819614387-large.jpg";
                    img.alt = "Paw patrol";
        
                    container.appendChild(img);
                }
                else{
                    if(edad < 16){
                        if(document.getElementById('pelicula').includes(img)){
                        elementoRecomendacion.textContent = "High School Musical";
                        const container = document.getElementById('pelicula');
                        const img = document.createElement("img");
                        img.src = "https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-257260163-large.jpg";
                        img.alt = "High School Musical";
        
                    container.appendChild(img);
                        }
                        else{
                            const container = document.getElementById('pelicula');
                            container.removeChild(img)
                            elementoRecomendacion.textContent = "High School Musical";
                            
                            const img = document.createElement("img");
                            img.src = "https://lumiere-a.akamaihd.net/v1/images/p_highschoolmusical_19752_5d68fbc2.jpeg?region=0,0,540,810";
                            img.alt = "High School Musical"

                            container.appendChild(img);
                        }
                    }
                    else{
                        elementoRecomendacion.textContent = "La la land";
                        const container = document.getElementById('pelicula');
                        const img = document.createElement("img");
                        img.src = "https://es.web.img3.acsta.net/pictures/16/10/26/08/50/198471.jpg";
                        img.alt = "La la land";
        
                    container.appendChild(img);
                    }                
                }
                break;
                
            
    }
}