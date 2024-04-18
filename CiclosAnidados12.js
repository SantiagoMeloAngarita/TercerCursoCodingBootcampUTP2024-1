function imprimirFigura() {
    let letras = ["P", "N", "L", "J", "H", "F", "D"];

    for (let fila = 1; fila <= 7; fila++) {
        
        for (let i = 1; i < fila; i++) {
            process.stdout.write("\t");
        }

        let letraActual = letras[fila - 1];
        for (let columna = fila; columna <= 14 - fila; columna++) {
            process.stdout.write(letraActual + "\t");
        }

        console.log(); 
    }
}

console.log("1\t2\t3\t4\t5\t6\t7\t8\t9\t10\t11\t12\t13");
imprimirFigura();
