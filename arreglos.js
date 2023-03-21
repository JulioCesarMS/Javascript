// Arreglos

const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

// accediendo al primer elemento
console.log(numeros[0])

// accediendo al segundo elemento
console.log(numeros[1])

// suma de dos elementos de un arreglo
let resultado = numeros[0] + numeros[1]
console.log(resultado)

// recorrido de un arreglo
const numeros2 = [1, 2, 3, 4, 5]
//for(let i=0; i<5; i++){
//    alert(numeros[i]);
//}

// agregar un elemento a un array
const array = ['Hola', 34, 'mensaje']
array.push('otro dato')

console.log(array)

// unshift : agrega elementos al einicio del array

const array2 = ['Hola', 34, 'mensaje']
array2.unshift('Mundo')
console.log(array2)

// shift : elimina primer elemnto de un array
// pop : elimina el último elemento de un array
const array3 = ['Hola', 34, 'mensaje']
array3.shift()
array3.pop()
console.log(array3)


// splice() : elimina uno o más elementos de un array
// argumentos:
// el primer argumento va a indicar donde va a comenzar a trabajar (0 : izq , 1: der)
const nombres = ['Juan', 'Pedro', 'Paco', 'Pablo']
nombres.splice(1,1)
console.log(nombres)

// concat : método para concatenar arreglos
const perros = ['Pupy', 'Ronnie', 'Firulais']
const gatos = ['Mishi', 'Zuri', 'Garfield']

const  mascotas = perros.concat(gatos)

console.log(mascotas)


// slice() : sirve para obtener una rebanada de un arreglo
const nombres2 = ['Juan', 'Pedro', 'Paco', 'Pablo']

const nombres3 = nombres2.slice(1,3)
console.log(nombres3)


// indexOf : extrae el índice de la posición de un elemento de un arreglo

const pos1 = nombres2.indexOf('Pedro')
console.log(pos1)

// includes() : verifica si un elemento se encuentra en un arreglo, devuelve true o false

const result1 = nombres2.includes('Javier')
const result2 = nombres2.includes('Pedro')
console.log(result1)
console.log(result2)


// Eliminar cualquier elemento
const names = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre)

    if(index != -1){
        nombres.splice(index,1)
    }
}

const result5 = eliminar('Pedro')

console.log(result5)


// ejemplo con clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.vendido = false
    }

    sumarIva(){
        this.precio = this.precio*1.16
    }

    vender(){
        this.vendido=true
    }

}

const productos = []

const producto1 = new Producto('Arroz', 100)
const producto2 = new Producto('Fideo', 200)
const producto3 = new Producto('Harina', 600)

productos.push(producto1, producto2, producto3)

console.log(productos)

// sumamos iva
for(const producto of productos){
    producto.sumarIva()
    producto.vender()
}

console.log(productos)


