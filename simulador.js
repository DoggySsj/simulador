//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").textContent);
    let egresos=parseFloat(document.getElementById("txtEgresos").textContent);
    let montoDisponible=calcularDisponible();
    document.getElementById("spnDisponible").textContent=montoDisponible;

    capacidadPago=calcularCapacidadPago(montoDisponible);
    document.getElementById("spnCapacidadPago").textContent=capacidadPago;
}