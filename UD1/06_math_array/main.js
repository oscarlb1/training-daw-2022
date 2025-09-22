// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let suma = 0;
    let max = 0;
    let min = 0;

    //suma
    for (let i =0; i < array.length; i++) {
        suma += array [i];
    }

    //max
    
    //min

    //media

    console.log("Suma:", suma);
    console.log("Max:", max);
    console.log("Min:", min);
  }




doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])