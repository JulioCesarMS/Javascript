// Funciones de orden superior

// sumarRango()

const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach(function(num) {
    console.log(num)
})


// Ejemplo 2
const cursos = [
    {nombre:'Javascript', precio:15000},
    {nombre:'ReactJS', precio:22000},
    {nombre:'AngularJS', precio:22000},
    {nombre:'Desarrollo Web', precio:16000},
]

cursos.forEach((curso) => {
    console.log(curso.nombre)
})


// enocntrado
const num = [1, 2, 3, 4, 5, 6]
const encontrado = num.find(num => num > 3)

console.log(encontrado)


// Ejemplo con arrays de objetos
const cursos4 = [
    {
        nombre : 'Javascript',
        precio : 15000,
    },
    {
        nombre : 'ReactJS',
        precio : 22000
    }
]

const resultado4 = cursos4.find(curso => curso.nombre == 'ReactJS')
console.log(resultado4)

// -----------------------------------------------------------
// Filter : si no hay coincidencias retorna un array vacio []
//------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6]
const nombres = ["Ana", "Ema", "Juan", "Elia"]

const filtro1 = numeros.filter(numbers => numbers > 3)
console.log(filtro1)

const filtro2 = nombres.filter(nomb => nomb.includes('Em'))
console.log(filtro2)

// Ejemplo con arrays de objetos
const cursos5 = [
    {
        nombre : 'Javascript',
        precio : 15000,
    },
    {
        nombre : 'ReactJS',
        precio : 22000
    }
]

const resultado5 = cursos5.filter(curso => curso.precio > 15000)
console.log(resultado5)


// método some : devuelve true o false dependiendo si un elemento se encuentra en un arreglo

// Ejemplo con arrays de objetos
const cursos6 = [
    {nombre : 'Javascript', precio : 15000},
    {nombre : 'ReactJS', precio : 22000},
    {nombre : 'AngularJS', precio : 22000},
]

const result3 = cursos6.some(curso => curso.nombre == 'ReactJS')
console.log(result3)


// Método map : perimite transformar los elementos de un array

const elementos = [1, 2, 3, 4, 5, 6]
const porDos = elementos.map(num => num*2)

console.log(porDos)


// método reduce() :
const numeros5 = [1, 2, 3, 4, 5, 6]
const total = numeros5.reduce((acc, numero) => acc + numero,0)

console.log(total)


// monto total de compras

const carrito = [
    {nombre: 'Cereal', precio:1600, cantidad: 2},
    {nombre: 'Refresco', precio:1500, cantidad: 1},
    {nombre: 'Arroz', precio:4000, cantidad: 1},
    {nombre: 'Avena', precio:900, cantidad: 2},
]

const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
console.log(cantidadTotal)

const montoTotal = carrito.reduce((acc, item) => acc + (item.precio*item.cantidad), 0)
console.log(montoTotal)


// método sort : ordena 

const n = [40, 1, 5, 20, 16];

n.sort((a,b) => a - b)  // ordena de menor a mayor
n.sort((a,b) => b - a)  // ordena de mayor a menor


// matemáticas

const pi = Math.PI
console.log(pi)
console.log(Math.ceil(pi))
console.log(Math.floor(pi))

console.log(Math.round(pi))

console.log(Math.random())

// fechas
console.log(new Date(2020, 1, 15))

