const numColumnas = 10; 

for (let i = 0; i < numColumnas; i++) {
    for (let j = 0; j < numColumnas; j++) {
        if (j === i) {
            process.stdout.write("A"); 
        } else {
            process.stdout.write(" ");
        }
    }
    console.log(); 
}