// Codigo ejecutado linea tras linea por el eventloop

/*

console.log('1 Inicio');
console.log('2 Ejecutando');
console.log('3 Terminando');

*/


// Ejecucion que toma tiempo siempre al event 

/*

console.log('1 Inicio');
setTimeout(() => {
    console.log('2 Ejecutando');
}, 0000);
console.log('3 Terminando');

*/


//Solucion 1 Callbacks (NO ES RECOMENDADA por casos de callbackhell)
// function run() {
//     console.log('1 Inicio');
//     myFuncion(ejecutando);
//     // console.log('4 Fin');
// }

// function myFuncion(ejecutando) {
//     setTimeout(() => {
//         console.log('2 Ejecutando');
//         ejecutando();
//     }, 0000);
// }

// function ejecutando() {
//     console.log('3 Terminando');
//     console.log('4 Fin');
// }

// run();

// Solucion 2 Promesas
// Promise: Algo que va a ocurrir pero no sabemos cuando va a ocurrir.
// Estados de las promesas: Pendiente (pending), resuelto (resolve) y rechazado (reject)

function asincronia() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Ejecutando');
            resolve();
            // reject(new Error('mi custom error'));
        }, 1000);
    });
}

console.log('1 Inicio');
asincronia().then(() => {
    console.log('en el then');
    console.log('3 Terminando');
    // Siguientes acciones despues de que responde la promesa con resolve()

}).catch(error =>  console.log('error: ', error))

.finally(() => {
    // Se ejecuta siempre, tanto si la promesa fue resolve o reject
    console.log('4 FIN');
    console.log('en el finally');
})