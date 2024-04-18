function Fibonacci(limite) {
    let n1 = 0;
    let n2 = 1;
    let resultado = 0;


    console.log(n1);


    while (resultado <= limite) {
+
        console.log(n2);

        resultado = n1 + n2;


        n1 = n2;
        n2 = resultado;
    }
}
Fibonacci(10000);