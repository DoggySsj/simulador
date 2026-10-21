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


