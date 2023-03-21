
// Ciclos e iteraciones

//for(let i=0; i<10; i++){
//    alert(i)
//}

// Ejemplo 2
//let numero = parseInt(prompt("Ingrese un número: "))
//for(let i=1; i<=10; i++){
//    let resultado = numero * i
//    alert(numero + ' x ' +i+' = ' + resultado)
//}

// Ejemplo3
//for(let i=1; i<=10; i++){
//    if(i == 5){
//        continue
//    }else{
//        alert(i)
//    }
//}

// Ejemplo 4: ciclo while

//let entrada = prompt("Ingrese un dato: ")

//while(entrada != 'ESC'){
//    alert('El usuario ingresó: '+ entrada)
//    entrada = prompt('Ingrese otro dato:')
//}

// Ejemplo 5: do while

//let repetir = false
//do {
//    alert('Solo una vez!')
//}while(repetir);

// Ejemplo 6: Validación de correo electrónico
//let askAgain = true
//let userEmail = ''
//let confirmUserEmail = ''

//do{
//    userEmail = prompt('Ingrese su correo:')
//    confirmUserEmail = prompt('Confirme su correo:')

//    if(userEmail===confirmUserEmail){
//        alert('El correo: '+userEmail+' Fue guardado con éxito!')
//        askAgain = false
//    } else {
//        alert('Los correos deben ser iguales!')
//    }
//} while(askAgain)

// Ejemplo 6: Simulador de compras

let producto = ''
let precio = 0
let cantidad = 0
let precioTotal = 0
let serguirComprando = false

do {
    producto = prompt('Quieres comprar shapoo, acondicionador o ambos?')
    cantidad = parseInt(prompt('¿Cuántos quieres comprar?'))

    switch(producto){
        case 'shampoo':
            precio = 500
            break
        case 'acondicionador':
            precio = 700
            break
        case 'ambos':
            precio = 1200
            break
        default:
            alert('El preducto no se encuntra en el catalogo!')
            precio = 0
            cantidad = 0
    }

    precioTotal += precio*cantidad 

    serguirComprando = confirm('Quieres seguir comprando?')


} while(serguirComprando);

alert('El precio total de la compra es: '+precioTotal)