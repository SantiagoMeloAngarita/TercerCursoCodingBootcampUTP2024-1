function imprimirTabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}

function presentarTabla() {
    for (let j = 1; j <= 10; j++) {
        imprimirTabla(j);
    }
}

presentarTabla();