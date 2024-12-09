let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log("El promedio es:", promedio); // Resultado esperado: 30

function calcularPromedio(numeros) {
    let suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}