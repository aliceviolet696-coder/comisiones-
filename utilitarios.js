function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente);
    return componente.value;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    return parseFloat(valorTexto);
}