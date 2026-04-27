const VENTAS_BASEE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASEE) {
        let ventasExtra = numeroVentas - VENTAS_BASEE;
        comision = ventasExtra * (precioProducto * 0.1);
    }

    return comision;
}

// 🔴 FUNCIÓN GENERAL DE VALIDACIÓN
function validarNumero(idInput, idError, opciones) {
    let valor = recuperarTexto(idInput);
    let input = document.getElementById(idInput);
    let error = document.getElementById(idError);

    error.textContent = "";
    input.classList.remove("error");

    if (valor.trim() === "") {
        error.textContent = "Campo obligatorio";
        input.classList.add("error");
        return false;
    }

    if (opciones.entero) {
        if (!/^\d+$/.test(valor)) {
            error.textContent = "Solo números enteros";
            input.classList.add("error");
            return false;
        }
    } else {
        if (!/^\d+(\.\d+)?$/.test(valor)) {
            error.textContent = "Formato numérico inválido";
            input.classList.add("error");
            return false;
        }
    }

    let numero = parseFloat(valor);

    if (numero < opciones.min) {
        error.textContent = "Valor mínimo: " + opciones.min;
        input.classList.add("error");
        return false;
    }

    if (numero > opciones.max) {
        error.textContent = "Valor máximo: " + opciones.max;
        input.classList.add("error");
        return false;
    }

    if (opciones.maxLength && valor.length > opciones.maxLength) {
        error.textContent = "Máximo " + opciones.maxLength + " dígitos";
        input.classList.add("error");
        return false;
    }

    return true;
}

// 🟢 FUNCIÓN PRINCIPAL
function calcular() {

    let valido = true;

    if (!validarNumero("txtSueldoBase", "errorSueldo", {
        entero: false,
        min: 0,
        max: 100000
    })) valido = false;

    if (!validarNumero("txtVentas", "errorVentas", {
        entero: true,
        min: 0,
        max: 99999,
        maxLength: 5
    })) valido = false;

    if (!validarNumero("txtPrecio", "errorPrecio", {
        entero: false,
        min: 0.01,
        max: 10000
    })) valido = false;

    if (!valido) return;

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = sueldoBase;
    document.getElementById("spComision").textContent = comision;
    document.getElementById("spTotal").textContent = total;
}