/* Pagina de Promedio, Moda & Mediana  */
/*
    var lista1 = [100, 200, 300, 500];
    var sumaLista1 = 0;
    for (let i = 0; i < lista1.length; i++) {
        sumaLista1 = sumaLista1 + lista1[i]; 
    }

    const promedioLista1 = sumaLista1 / lista1.length;
 */

//------> PROMEDIO

 function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;

    for (let i = 0; i < lista.length; i++ ) {
    sumaLista = sumaLista + lista[i]; 
    } */
    
    const sumaLista = lista.reduce(
        function(acumulador = 0, elemento){
            return acumulador + elemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
 }

 // ---------> MEDIANA
const listaMediana = [100, 200, 500, 4000,];
const mitadListaMediana = parseInt(listaMediana.length / 2); 
function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    }else{
        return false
    }
}

var mediana;

if (esPar(listaMediana.length)) {
    const elemento1 = listaMediana[mitadListaMediana - 1];
    const elemento2 = listaMediana[mitadListaMediana];
    const promedio1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio1y2;
} else{
    mediana = listaMediana[mitadListaMediana];
    // --> mediana
}


// ------> Moda 
var modaLista = [1,2,3,1,3,4,2,5,2,4,3,3,3];
var contadorLista = {};
modaLista.map(
    function (elemento) {
        if (contadorLista[elemento]) {
            contadorLista[elemento] += 1;
        }else{
            contadorLista[elemento] = 1;
        }

    }
);

var listaArray = Object.entries(contadorLista).sort(
    function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listaArray[listaArray.length - 1];


