//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").value);
    let egresos=parseFloat(document.getElementById("txtEgresos").value);
    let total=ingresos-egresos;
    console.log(total);
    return total;
}


