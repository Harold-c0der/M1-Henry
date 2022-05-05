'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

class Node{
  constructor(value,next){
    this.value = value;
    this.next = null
  }
}
class LinkedList {
    constructor(){
      this.head = null;
      this._length = 0;
    }
    add(x){
      let newNodo = new Node(x,null);
      let current = this.head
      if (!current) {
        this.head = newNodo
        this._length ++
        return newNodo
      }
      while (current.next) {
        //distinto de null
        current = current.next
      }
      ////////////////////////
      current.next = newNodo
      this._length++;
      return newNodo
    };

    remove(){
      let current = this.head
      let del;
      this._length --
      if (!current) {
        return null
      }
      if(current.next === null) {
        del = this.head.value
        delete this.head
        return del
      }
      while (current.next.next) { 
        //distinto de null
        current = current.next
      }
      ////////////////////
      del = current.next.value
      console.log(del);
      current.next = null
      return del
    };

    search(x){
      if(this.head === null ) return null;
      let current = this.head;
      while(current){
      if(current.value === x) return current.value
      else if(typeof x == 'function'){
        if(x(current.value)){
          return current.value;
        }
      }
        current = current.next
    }
      return null;
    };

    arr(){
      let arry = []
      let current = this.head
      while (current != null) {
        arry.push(current.value)
        current = current.next
      } 
      return arry
    }

    size(){
      return this._length
    }
}


let lista = new LinkedList()
lista.add(2)
lista.add('two')
lista.add(2)
console.log(lista.size())
// let persona = new UserNode('Harold', 'zzz','madrid')
// console.log(persona.name);
// lista.add(new UserNode('Harold', 'zzz','madrid'))
lista
console.log(lista.search(2))
console.log(lista.search())
console.log(lista.search(function(nodeValue) {
  return nodeValue === 'two';
}))


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

class HashTable {
    constructor(){
      this.numBuckets = 35;
      this.contenedores = [];
    }
    
    set(key,value){
      if (typeof key != "string") {
      throw new TypeError("La key debe ser un string");
      
      };
      var posicion = this.hash(key);
      this.contenedores [posicion] = this.contenedores[posicion] || [];
      this.contenedores [posicion].unshift({ key: key, value: value });
    }
    get(value){
      let numeroDelContenedor = this.hash(value);
      for (let i = 0; i < this.contenedores[numeroDelContenedor].length; i++) {
        if (this.contenedores[numeroDelContenedor][i].key === value) {
          return this.contenedores[numeroDelContenedor][i].key;
        }
        
      }
      return false
    }
    hasKey(key){
      let aux = this.get(key)
      return aux ?  true : false 
    }
};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
