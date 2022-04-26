"use strict";

function BinarioADecimal(num) {

  let arr = num.split('').reverse()
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(Math.pow(2, i) * arr[i]) 
  }

  //sumando los valores del array
  let result1 = arr2.reduce((acumulador,numero) =>{
        return acumulador + numero
  },0);

  return result1
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = '';
  while (num != 0 ) {
      result = (num%2) + result
      num = Math.trunc(num/2)
  }
  return result
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
