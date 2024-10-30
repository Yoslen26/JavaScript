let opcion = 1;

if (opcion === 1){
    let numero = -5;
    if (numero > 0){
        console.log("El número es positivo");
    }
    else if (numero < 0){
        console.log("El número es negativo");
    }
    else{
        console.log("El número es 0");
    }

} else if (opcion === 2){
    let a = 2;
    let b = 8;
    let operacion = "suma";

    if (operacion === "suma"){
        console.log("Resultado de la suma:", a + b);
    } else if (operacion === "resta"){
        console.log("Resultado de la resta:", a - b);
    } else if (operacion === "multiplicación"){
        console.log("Resultado de la multiplicación:", a * b);
    } else if (operacion === "division"){
        if (b !== 0){
            console.log("Resultado de la division:", a / b);
        }
    }

} else if (opcion === 3){
    let dia = 5;

    if (dia === 1){
        console.log("El día es lunes");
    }
    else if (dia === 2){
        console.log("El día es martes");
    }
    else if (dia === 3){
        console.log("El día es miércoles");
    }
    else if (dia === 4){
        console.log("El día es jueves");
    }
    else if (dia === 5){
        console.log("El día es viernes");
    }
    else if (dia === 6){
        console.log("El día es sábado");
    }
    else if (dia === 7){
        console.log("El día es domingo");
    }
    else {
        console.log("El número debe ser del 1 al 7");
    }

} else{
    console.log("No existe esa opción");
}