

// Valores para productos y billetes
const productos = [{name:'Soda', price:17}, 
                   {name:'Agua', price:10}, 
                   {name:'Jugo', price:20}, 
                   {name:'Chips', price:10}, 
                   {name:'Caramelo', price:6}];
                   
const billetes = [10, 20, 50, 100, 200];

// función para contabiliar el cambio restante
function getChange(cambioRestante, cambioArray){
  if (cambioRestante == 0) {
    return [];
  }
  if(billetes.includes(cambioRestante)){
    cambioArray.push(cambioRestante);
    return cambioArray;
  }
  
  for(let i = 0; i < billetes.length; i++){
    if (billetes[i] < cambioRestante) {
      cambioArray.push(billetes[i]);
      return getChange(cambioRestante - billetes[i], cambioArray);
    }
  }
}

// función para simular la compra 
function vMachine(pago, numeroProducto){
  if (numeroProducto > productos.length || numeroProducto <= 0){
    console.log("Ingrese un número válido");
    return;
  }
  if (pago < productos[numeroProducto-1].price){
    console.log("Monto insuficiente para realizar compra");
    return;
  }
  
  console.log("Producto: " + productos[numeroProducto-1].name + ", Cambio: " + 
              getChange(pago-productos[numeroProducto-1].price, []));
}

//const prompt=require("prompt-sync")({sigint:true}); 
//import promp from prompt;
// Ejemplo: compra de un Jugo y se paga con billete de 50 (el costo es de 20)
const pago = Number(prompt('Ingrese el valor del billete: ', 'Ej 10 20 50 100 200'))
//let| pago = Number(prompt('Ingrese el valor del billete: ', 'Ej. 10 20 50 100 200'))
const producto = Number(prompt('Seleccione el producto: ', 'Ej. Soda=1 Agua=2 Jugo=3 Chips=4 y Caramelo=5'))

const resultado = vMachine(pago, producto)
alert(resultado)
