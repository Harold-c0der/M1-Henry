'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null
  };
  insert(x, y = new BinarySearchTree(x)){
    // if(!y) let y = this;
    if (x < this.value) {
      console.log(this.value)
      console.log(x)
      if(this.left === null){ // si left no tiene valor
        this.left = new BinarySearchTree(x)
      } else {  // si left ya tiene un valor
        console.log(this.left);
        this.left.insert(x)
      }
    }
    if(x >= this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(x)
      }else { 
        this.right.insert(x)
      }
    }
  };


  contains(valor){
    if(valor === this.value ) return true //encontre el valor ?
    if (valor > this.value) { 
      if(!this.right){
        return false;
      }
      else{
        return this.right.contains(valor)
      }

    }else{
      if(!this.left){
        return false;
      }
      else {
        return this.left.contains(valor)
      }
    };
  //   if (this.value === valor) return true;
  //   if (valor > this.value) {
  //   if (!this.right) {
  //     return false;
  //   } else {
  //     return this.right.contains(valor);
  //   }
  // } else {
  //   if (!this.left) {
  //     return false;
  //   } else {
  //     return this.left.contains(valor);
  //   }
  // }
}
      
  
  
  depthFirstForEach(cb , recorrido){
    if(recorrido === 'pre-order'){
      cb(this.value)
      if(this.left){
        this.left.depthFirstForEach(cb,recorrido)
      }
      if(this.right){
        this.right.depthFirstForEach(cb,recorrido)
      }
    }else if(recorrido === 'post-order'){
      
        if(this.left){
          this.left.depthFirstForEach(cb,recorrido)
        }
        if(this.right){
          this.right.depthFirstForEach(cb,recorrido)
        }
        cb(this.value)
    } else{
        if(this.left){
        this.left.depthFirstForEach(cb,recorrido)
        }
        cb(this.value)
      
        if(this.right){
        this.right.depthFirstForEach(cb,recorrido)
        }//recorrido order 
      }
  };
  breadthFirstForEach(cb, array ){
    if(!array){
      var array = [];
    }
    if(this.left){
      array.push(this.left)
    }
    if(this.right){
      array.push(this.right)
    }
    cb(this.value)
    if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array)
    }
  };
  size(){
    if(!this.left && !this.right)return 1
    else if (this.left && this.right) return 1 + this.left.size() + this.right.size()
    else if(this.left) return 1 + this.left.size()
    else if (this.right) return 1 + this.right.size()
  };
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
