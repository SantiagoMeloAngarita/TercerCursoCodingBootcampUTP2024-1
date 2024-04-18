function imprimirFigura() {
    let caracter = "A";
    let espacio = " ";

    for (let fila = 1; fila <= 25; fila++) {

        for (let i = 0; i < (25 - fila) * 2; i++) {
            process.stdout.write(espacio);
        }

        for (let columna = 1; columna <= fila; columna++) {
            process.stdout.write(caracter + espacio);
        }

        console.log(); // Nueva línea después de imprimir cada fila
    }
}

console.log("Fila");
imprimirFigura();
console.log("Columna");
