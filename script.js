'use stric'

// LISTA
let listaContador = document.querySelectorAll (".contador");  

console.log( listaContador ) 
/**
 * 
 * 
 * 
 * @param {number} limite 
 * @param {nodoHTML} nodoComodinHTML - Cualquier elemenot HTML dodne queramos pintar el contador
 */
function contador (limite , nodoComodinHTML) {
    let creciente = 0;
    let ref_interval;

    ref_interval = setInterval (function () {      
        nodoComodinHTML.innerHTML = creciente + "%";
        creciente ++;
    
        if (creciente >= limite ) {
            clearInterval (ref_interval);
        }
    }, 20);
};
contador (77 , listaContador[0]);
contador (70 , listaContador[1]);
contador (54 , listaContador[2]);
contador (91 , listaContador[3]);


//DATA SET 
// 

 