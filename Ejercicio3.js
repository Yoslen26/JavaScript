let operacion = "division";
let a = 10;
let b = 2;

if (operacion === "suma"){
    console.log("Resultado de la suma:", a + b);
} else if (operacion === "resta"){
    console.log("Resultado de la resta:", a - b);
} else if (operacion === "multiplicación"){
    console.log("Resultado de la multiplicación:", a * b);
} else if (operacion === "division"){
    if (b !== 0) {
        console.log("Resultado de la division:", a / b);
    }
} else{
    console.log("Operación no válida.");
}