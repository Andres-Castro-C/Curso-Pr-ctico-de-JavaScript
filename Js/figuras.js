/* CODIGO SIN ENCAPSULAR 
//Codigo del Cuadrado
console.group("Cuadrados");
    var ladoCuadrado = 5;
    console.log("Los lados del Cuadrado miden: " + ladoCuadrado + "cm");

    var perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

    var areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo de Traingulo
console.group("Triangulos");
    var ladoTriangulo1 = 6, ladoTriangulo2 = 6, baseTriangulo = 4, alturaTriangulo = 5.5;
    console.log("Los lados del Triangulo miden: " + "Lados: " + ladoTriangulo1 + "cm Y su Base: " + baseTriangulo + "cm");

    var perimetroTrinagulo = (ladoTriangulo1+ladoTriangulo1+baseTriangulo);
    console.log("El perimetro del Triangulo es: " + perimetroTrinagulo + "cm");

    var areaTrinagulo = (baseTriangulo * alturaTriangulo)/2;
    console.log("El area del Triangulo es: " + areaTrinagulo + "cm");

    console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")
console.groupEnd();


//Codigo de Circulo
console.group("Circulo");
    var radioCirculo = 4, pi = Math.PI;
    console.log("El radio del Circulo es: " + radioCirculo + "cm");
    console.log("El valor de PI es: " + pi);

    var diametroCirculo = (radioCirculo * 2);
    console.log("El diamtro del circulo es: " + diametroCirculo + "cm");

    var perimetroCirculo = (diametroCirculo * pi);
    console.log("El perimetro del Circulo es: " + perimetroCirculo +"cm");

    var areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log("El arria del Circulo es: " + areaCirculo + "cm^2");
console.groupEnd();
*/

//----------Encapsulando Codigos 
/* Funcion de Codigo de Cuadrados */
function funPerimetroCuadrado(lado) {
   return lado * 4;
}

function funAreaCuadrado(lado) {
    return lado * lado;
 }

 /* Funcion de Codigo de Triangulo */
 function funPerimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
 }
 
 function funAreaTriangulo(base, altura) {
     return ((base * altura)/2);
  }
 
  /* Funcion de Codigo de Circulo */
 function funDiametroCirculo(radioCirculo) {
    return (radioCirculo * 2 );
 }
 
 function funPerimetroCirculo(radioCirculo) {
    var diametro = funDiametroCirculo(radioCirculo);
    return (diametro * Math.PI);
  }

function funAreaCirculo(radioCirculo) {
    return ((radioCirculo * radioCirculo) * Math.PI);
}

/* Interactuar con un HTML */
function calcularPerimetroCuadrado(){
    var inputCuadrado = document.getElementById("ImputCuadrado");
    var value = inputCuadrado.value;
    var perimetroCuadrado = funPerimetroCuadrado(value);
    window.alert("El perimetro de su cuadrado es: " + perimetroCuadrado + "cm");
}

function calcularAreaCuadrado(){
    var inputCuadrado = document.getElementById("ImputCuadrado");
    var value = inputCuadrado.value;
    var areaCuadrado = funAreaCuadrado(value);
    window.alert("El perimetro de su cuadrado es: " + areaCuadrado + "cm");
}

function calcularPerimetroTriangulo(){
    var inputTrianguloLado1 = document.getElementById("ImputLado1Trian");
    var valueLado1 = parseFloat(inputTrianguloLado1.value);
    var inputTrianguloLado2 = document.getElementById("ImputLado2Trian");
    var valueLado2 = parseFloat(inputTrianguloLado2.value);
    var inputTrianguloBase = document.getElementById("ImputBaseTrian");
    var valueBase =  parseFloat(inputTrianguloBase.value);
    var perimetroTriangulo = funPerimetroTriangulo(valueLado1, valueLado2, valueBase);
    window.alert("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");
}

function calcularAreaTrianguo(){
    var inputTrianguloBase = document.getElementById("ImputBaseTrian");
    var valueBase =  parseFloat(inputTrianguloBase.value);
    var inputTrianguloAltura = document.getElementById("ImputAlturaTrian");
    var valueAltura = inputTrianguloAltura.value;
    var areaTriangulo = funAreaTriangulo(valueBase, valueAltura);
    window.alert("El Area del Triangulo es: " + areaTriangulo + "cm");
}

function calcularDiametroCircunferencia(){
    var inputRadioCirculo = document.getElementById("InputRadioCirculo");
    var valueRadio = parseFloat(inputRadioCirculo.value);
    var diametroCirculo = funDiametroCirculo(valueRadio);
    window.alert("El Diamtro de la Circunferencia es: " + diametroCirculo + "cm");
}

function calcularPerimetroCircunferencia() {
    var inputRadioCirculo = document.getElementById("InputRadioCirculo");
    var valueRadio = parseFloat(inputRadioCirculo.value);
    var perimetroCirculo = funPerimetroCirculo(valueRadio);
    window.alert("El Diamtro de la Circunferencia es: " + perimetroCirculo + "cm");
}

function calcularAreaCircunferencia() {
    var inputRadioCirculo = document.getElementById("InputRadioCirculo");
    var valueRadio = parseFloat(inputRadioCirculo.value);
    var areaCirculo = funAreaCirculo(valueRadio);
    window.alert("El Diamtro de la Circunferencia es: " + areaCirculo + "cm");
}


/*En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

    La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    La función debe retornar la altura del triángulo.
    Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

 */

//-------Reto De PLATZI -------

function alturaTriangulo(lado1, lado2, lado3) {
    var altura1 = (lado1 * lado2) - ((lado3 * lado3)/4);
    if (lado1 === lado2 && lado3 != lado1 && lado3 != lado2 ){
        alert("Es un trinagulo equilatero");
        alert("La altura del triangulo es: " + Math.sqrt(altura1));
    } else if(lado3 === lado2 && lado1 != lado2 && lado1 != lado2){
        alert("Es un Trinagulo Equilatero");
        var altura2 = (lado3 * lado2) - ((lado1 * lado1)/4);
        alert("La altura del triangulo es: " + Math.sqrt(altura2));
    }else if(lado1 === lado3 && lado2 != lado1 && lado2 != lado3){
        alert("Es un Trinagulo Equilatero");
        var altura3 = (lado3 * lado1) - ((lado2 * lado2)/4);
        alert("La altura del triangulo es: " + Math.sqrt(altura3));
    }else{
        alert("No es un Trinagulo Equilatero");
    }
}