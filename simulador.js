//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").textContent);
    let egresos=parseFloat(document.getElementById("txtEgresos").textContent);
    let disponible=calcularDisponible();
    document.getElementById("spnDisponible").textContent=disponible;
    console.log(disponible);
}