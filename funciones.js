import impor from 'impor';

// fuciones 

//function saludar(){
//    console.log("Hola mundo")
//}

//saludar()


// Ejemplo 2
//function solicitarNombre(){
//    let nombre = prompt('Ingrese su nombre')
//    alert('El nombre es :'+nombre)
//}

//solicitarNombre()

//solicitarNombre()

// Ejemplo 3: sumar dos numeros

//function sumarDosNumeros(primerNumero, segundoNumero){
//    return primerNumero + segundoNumero
//}

//let resultado = sumarDosNumeros(3, 4)
//alert('El resultado de la suma es : '+ resultado)

// Ejemplo 4 : Calculadora
function calcularOperacion(numero1, numero2, operacion){
    switch(operacion){
        case '+':
            return numero1 + numero2
        case '-':
            return numero1 - numero2
        case '*':
            return numero1 * numero2
            case '/':
                return numero1 / numero2
        default:
            break

    }

}

import promp from prompt

let numero1 = Number(promp('Ingrese el primer numero: '))
let numero2 = Number(promp('Ingrese el segundo número: '))
let operacion = prompt('Ingrese la operación: ', 'Ej. + - * 7')

let resultado = calcularOperacion(numero1, numero2, operacion)
alert(resultado)


//-------------------------------------------------
// Explicando var y let
//-------------------------------------------------

// let scope de bloque {}
// var no respeta scope de bloque

function explicandoVar(){
    var a = 10
    console.log(a)
    if(true){
        var a = 20
        console.log(a)
    }
    console.log(a)
}

//explicandoVar()
// respuesta = 20
// Veamos con función Let
function explicandoLet(){
    let a = 10
    console.log(a)
    if(true){
        let a = 20
        console.log(a)
    }
    console.log(a)
}

//explicandoVar()
// respuesta = 10 . Let vive solo dentro de bloque {}

//---------------------------------------------------------
// Funciones anónimas
//---------------------------------------------------------

const suma = function (a,b) {return a + b}
const resta = function (a,b) {return a - b}
console.log(suma(15,20))
console.log(resta(20,15))

// arrow function
const suma2 = (a,b) => a + b
const resta2 = (a,b) => a - b
console.log(suma2(15,20))
console.log(resta2(20,15))


// Ejemplo : Calculo del iva

const calcularIva = precio => precio * 0.16

let precioProducto = 500
let precioDescuento = 50

let iva = calcularIva(precioProducto)
let precioConIva = suma(precioProducto, iva)
let precioFinal = resta(precioConIva, precioDescuento)

alert('Els precio final es: '+precioFinal)
