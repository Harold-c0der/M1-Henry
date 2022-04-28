'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if( n > -1 && n < 2) return 1
  else if(n < 0 ) throw new Error('no hay factorial de numeros negativos')

  return n * nFactorial(n - 1)
}



function nFibonacci(n) {
  return (n < 2 && n >= 0) ? n : nFibonacci(n -2) + nFibonacci (n-1)
}


// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

class Queue {
  constructor(){
    this.arr = [];
  }
  enqueue(x){
    return this.arr.push(x)
  }
  dequeue(){
    return this.arr.shift()
  }
  size(){
    return this.arr.length
  }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
