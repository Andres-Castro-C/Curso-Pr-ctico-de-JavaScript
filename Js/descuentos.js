/* Pagina de descuentos  */
var precioOriginal = 100;
var descuento = 15;
var porcentajePrecioConDescuento = 100 - descuento;
var precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPreciosConDescuentos(precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function precioDescuentos(){
    var inputPrecio = document.getElementById("precioProducto");
    var valuePrecio = parseFloat(inputPrecio.value);
    var inputDescuento = document.getElementById("descuento");
    var valueDescuento = parseFloat(inputDescuento.value);
    var precioPagar = calcularPreciosConDescuentos(valuePrecio, valueDescuento);
    var resultadoPagar = document.getElementById("resultadoPagar");
    resultadoPagar.innerText = "El valor total a pagar con descuento es de $"+ precioPagar; 

}

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});
