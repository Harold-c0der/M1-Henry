'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1]
  let i = 2
  while(num != 1){ // no funcionaba pok cada vez que llamaba while se redeclraba let i
    if(num % i === 0 ){
      arr.push(i)
      num = num / i 
    } else{
      i++
    }
  } 
  return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cambio = true 
  while (cambio) {
    cambio = false
    for(let i = 0; i < array.length ; i++){
      if(array[i] > array[i + 1]){
        let mas = array[i]
        array[i] = array[i + 1]
        array[i + 1] = mas
        cambio = true
      } 
    }
    
  }
  
  return array
}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
   // x  i
  //     aux

  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j;// elemento a insertar
    for (j = i - 1; j >= 0 && array[j] > current ; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = current;
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let minimo = i
      for (let x = i + 1; x < array.length; x++) {
        if (array[x] < array[minimo]) {
          minimo = x
      }
    }
    if(minimo !== i ){
      let aux = array[i]
      array[i] = array[minimo]
      array[minimo] = aux
    }
  }
  return array  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
