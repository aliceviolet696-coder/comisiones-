const VENTAS_BASEE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASEE) {
        let ventasExtra = numeroVentas - VENTAS_BASEE;
        comision = ventasExtra * (precioProducto * 0.1);
    }

    return comision;
}

// ✅ VALIDACIÓN COMPLETA
function validarVentas() {
    let numeroVentasStr = recuperarTexto("txtVentas");
    let spError = document.getElementById("errorVentas");

    spError.textContent = "";

    if (numeroVentasStr.trim() === "") {
        spError.textContent = "Campo obligatorio";
        return false;
    }

    if (!/^\d+$/.test(numeroVentasStr)) {
        spError.textContent = "Solo números";
        return false;
    }

    if (numeroVentasStr.length > 5) {
        spError.textContent = "Máximo 5 dígitos";
        return false;
    }

    return true;
}

// (opcional pero recomendado)
function validarCampoNumerico(idInput, idError) {
    let valor = recuperarTexto(idInput);
    let spError = document.getElementById(idError);

    spError.textContent = "";

    if (valor.trim() === "") {
        spError.textContent = "Campo obligatorio";
        return false;
    }

    if (!/^\d+(\.\d+)?$/.test(valor)) {
        spError.textContent = "Solo números";
        return false;
    }

    return true;
}

function calcular() {

    let esValido = true;

    if (!validarVentas()) esValido = false;
    if (!validarCampoNumerico("txtSueldoBase", "errorSueldo")) esValido = false;
    if (!validarCampoNumerico("txtPrecio", "errorPrecio")) esValido = false;

    if (!esValido) return;

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = sueldoBase;
    document.getElementById("spComision").textContent = comision;
    document.getElementById("spTotal").textContent = total;
}