let numero = 2;

if (numero >= 0){
    console.log("El número es positivo");
    
    if (numero > 10) {
        console.log("El número es mayor que 10");
    } else if (numero < 10) {
        console.log("El número es menor que 10");
    } else {
        console.log("El número es igual a 10");
    }
    
}
else{
    console.log("El número es negativo por lo tanto es menor que 10");
}