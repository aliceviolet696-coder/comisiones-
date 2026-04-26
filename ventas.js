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
   // let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    //let sueldoBaseStr = componenteSueldoBase.value;
    
    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio");
    
    //let numeroVentasStr = componenteVentas.value;
    //let precioProductoStr = componentePrecio.value;



    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}