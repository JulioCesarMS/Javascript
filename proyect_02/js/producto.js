class Producto{
    constructor(nombre, descripcion){
        this._nombre = nombre;
        this._descripcion = descripcion;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        return this._descripcion = descripcion;
    }
    
}