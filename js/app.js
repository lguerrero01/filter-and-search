// variables 
let resultados = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;
 console.log( max)
//eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();// muestra los automoviles al cargar

    // llena las opciones de a;os
    llenarSelect();

})

//funciones \

function mostrarAutos() {

    autos.forEach( auto => {

        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}
        `;

// insertar en el html
    resultados.appendChild(autoHTML);
    })
}

function llenarSelect () {

    for (let i = max ; i >= min ; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i; 
        year.appendChild(opcion);
    }
}