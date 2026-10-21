//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").textContent);
    let egresos=parseFloat(document.getElementById("txtEgresos").textContent);
    let montoDisponible=calcularDisponible();
    document.getElementById("spnDisponible").textContent=montoDisponible.toFixed(2);

    capacidadPago=calcularCapacidadPago(montoDisponible);
    document.getElementById("spnCapacidadPago").textContent=capacidadPago.toFixed(2);

    let monto=parseFloat(document.getElementById("txtMonto").value);
    let plazoAnios=parseFloat(document.getElementById("txtPlazo").value);
    let intereses=parseFloat(document.getElementById("txtTasaInteres").value);
    let interes=calcularInteresSimple(monto,intereses,plazoAnios);
    document.getElementById("spnInteresPagar").textContent=interes;

    document.getElementById("spnTotalPrestamo").textContent=calcularTotalPagar(monto,interes);
}