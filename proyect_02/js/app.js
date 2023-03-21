const productos = [
    new Producto('Catsup', 'Heinz 250ml'),
    new Producto('Miel', 'Carlota 450ml')
];

function mostrarProductos(){
    console.log('Mostrar productos...');
    let texto = '';
    for(let producto of productos){
        console.log(producto);
        texto += `<li>${producto.nombre} ${producto.descripcion}</li>`;
    }
    document.getElementById('productos').innerHTML = texto;
}

function agregarProducto(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const descripcion = forma['descripcion'];
    if(nombre.value != '' && descripcion.value != ''){
        const producto = new Producto(nombre.value, descripcion.value);
        console.log(producto);
        productos.push(producto);
        mostrarProductos();
    }
    else{
        console.log('No hay información que agregar');
    }
}