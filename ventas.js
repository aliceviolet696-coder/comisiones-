const VENTAS_BASEE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if(numeroVentas > VENTAS_BASEE) {
        let ventasExtra = numeroVentas - VENTAS_BASEE;
        comision = ventasExtra * (precioProducto * 0.1);
    } 

    return comision;
}

function calcular(){
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    let sueldoBase = parseFloat(componenteSueldoBase.value);
    let numeroVentas = parseFloat(componenteVentas.value);
    let precioProducto = parseFloat(componentePrecio.value);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}