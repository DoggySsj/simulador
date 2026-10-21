//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").value);
    let egresos=parseFloat(document.getElementById("txtEgresos").value);
    let total=ingresos-egresos; 
    if (total<=0){
        total=0;
    }
    return total;
}

function calcularCapacidadPago(disponible){
    let capacidadPago = disponible/2;
    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes= parseInt(plazoAnios*monto*(tasa/100));
    return interes;
}

function calcularTotalPagar(monto,interes){
    let total=monto+interes+100;
    return total;
}

function calcularCuotaMensual(total,plazoAnios){
    let cuotaMensual=total/(plazoAnios*12);
    return cuotaMensual;
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if (capacidadPago>cuotaMensual){
        return true;
    }else{
        return false;
    }
}