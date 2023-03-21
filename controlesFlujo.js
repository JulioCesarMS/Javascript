

// Operadores de comparación

//let numero = 5

//if(numero == 5){
//    console.log("Vas a ver este mensaje")
//} 

//if(numero == 4){
//    console.log("No vas a ver este mensaje")
//}

// Ejemplo 2

let precio = 50
if(precio < 20){
    alert('El precio es menor a 20')
}else if(precio < 50){
    alert('El precio es menor a 50')
}else if(precio < 100){
    alert('El precio es menor a 100')
} else{
    alert('El precio es mayor a 100')
}


// Ejemplo 3

// coerción de tipos (operador de igualdad débil)
if(2 == '2'){
    console.log("Vemos esto por consola!")
}

// operador de igualdad estricto
if(2 === '2'){
    console.log("Vemos esto por consola!")
}

// Ejemplo 4
let numero1 = Number(prompt("Ingresa un número"))

if((numero1 >10) && (numero1 < 50)){
    alert("El número se encuentra entre 30 y 50")
}

