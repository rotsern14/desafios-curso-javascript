// tengo pensado arma un proyecto con una página e-commerce. sin embargo, hay ciertas variantes que deseo realizar, tanto la opción de que un usuario 
// se pueda validar y registrar en el sitio con la opción de poder comprar un producto. Como también, existir la posibilidad de ofrecer para empresas o pyme
// pueda armar con una selección de productos a través de un formulario enviar una cotización que de primera instancia mostraria un mensaje 
// al cliente indicandole que es una estimacion, debido que los precios pueden variar por el tipo de cambio.

// Esto ultimo seria asi por el hecho hay mcuhas fluctuaciones del precio por el tipo de cambio, y lo mejor es detenerminar el monton correcto y ofrecer el presupuesto 
// real con todos los descuentos y demas por mail o un chat bot en el mejor de los casos.




// seleccionando los productos


let selectProcesador = parseInt(prompt("Ingrese el tipo de procesador, OPCION: (1) Intel i3= 55000 $, (2) Intel i5 = 65000$, (3) Intel i7 = 75000$: "));
let selectCantidadCpu = parseInt(prompt("Ingrese Cantidad: "));
let selectMonitor = parseInt(prompt("Ingrese el tipo de monitor, OPCION: (1) samsung 22 inch = 63000$, (2) = LG 27 inch = 75000 $, (3) Itachi 27 inch = 61000 $: "));
let selectCantidadMonitor = parseInt(prompt("Ingrese Cantidad: "));
let selectDiscoDuro = parseInt(prompt("Ingrese el tipo de Disco Duro, OPCION: (1) 500 GB = 15000 $, (2) 1 TB = 20000 $, (3) 2 TB = 280000 $: "));
let selectCantidadDisco= parseInt(prompt("Ingrese Cantidad: "));
let selectTarjetaMadre = parseInt(prompt("Ingrese el tipo de Mother Board, OPCION:  (1) Mother Board Intel = 440000 $, (2) Mother Board Asus = 48000 $, (3) Mother Board Gigabit = 550000 $: "));
let selectCantidadTarjeta= parseInt(prompt("Ingrese Cantidad: "));


let valorProcesador;
let valorMonitor;
let valorDisco;
let valorTarjeta;



// Guardando Valores 

// se determina el valor del procesador segun la opcion.
// OBS. como modelo ideal seria que a traves de un select se machee el valor correspondiente al artico en HTML.

switch (selectProcesador){
    case 1:
        console.log('valor opcion 1 ok');
        valorProcesador = 55000;
        break;
        
    case 2:
        console.log('valor opcion 2 ok');
        valorProcesador = 65000;
        break;
        
    case 3:
        console.log('valor opcion 3 ok');
        valorProcesador = 75000;
        break;
        
    default:
        console.log('No se introdujo una opcion para procesador, se toma 0');
        valorProcesador = 0; 
        break;

}

switch (selectMonitor){
    case 1:
        console.log('valor opcion 1 ok');
        valorMonitor = 63000;
        break;
        
    case 2:
        console.log('valor opcion 2 ok');
        valorMonitor = 75000;
        break;
        
    case 3:
        console.log('valor opcion 3 ok');
        valorMonitor = 61000;
        break;
    default:
        console.log('No se introdujo una opcion para monitor, se toma 0');
        valorMonitor = 0; 
        break;

}

switch (selectDiscoDuro){
    case 1:
        console.log('valor opcion 1 ok');
        valorDisco = 15000;
        break;
    case 2:
        console.log('valor opcion 2 ok');
        valorDisco = 20000;
        break;
    case 3:
        console.log('valor opcion 3 ok');
        valorDisco = 28000;
        break;
    default:
        console.log('No se introdujo una opcion para disco duro, se toma 0');
        valorDisco = 0; 
        break;
}

switch (selectTarjetaMadre){
    case 1:
        console.log('valor opcion 1 ok');
        valorTarjeta = 44000;
        break;
    case 2:
        console.log('valor opcion 2 ok');
        valorTarjeta = 48000;
        break;
    case 3:
        console.log('valor opcion 3 ok');
        valorTarjeta = 55000;
        break;
    default:
        console.log('No se introdujo una opcion para procesador, se toma 0');
        valorTarjeta = 0; 
        break;

}


// calculando cantidad de unidades


if(selectCantidadCpu <= 0){
    selectCantidadCpu = 1;
}else {
    console.log('se ingreso una cantidad de cpu valida');
}

if(selectCantidadMonitor <= 0){
    selectCantidadDisco = 1;
}else {
    console.log('se ingreso una cantidad de monitor valida');
}

if(selectCantidadDisco <=0){
    selectCantidadDisco = 1;
}else{
    console.log('se ingreso una cantidad de Disco valida');
}

if(selectCantidadTarjeta <= 0){
    selectCantidadTarjeta = 1;
}else{
    console.log('se ingreso una cantidad valida de tarjeta madre');
}
    



// Calcular Total 


function calcularTotal(){
    let sumaTotal = 0;

    return sumaTotal = (valorProcesador*selectCantidadCpu) + (valorMonitor*selectCantidadMonitor) + (valorDisco*selectCantidadDisco) + (valorTarjeta*selectCantidadTarjeta);

}


let total = calcularTotal();

alert('Total a pagar por lo producto seleccionado es: ' + total);








