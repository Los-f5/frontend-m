export class Descuento {

    id: string;
    descuento_nombre: string;
    descuento : string; 
    fecha_inicio: string; 
    fecha_final: string; 
    estado: string;
    constructor(id: string,
        descuento_nombre: string,
        descuento : string,
        fecha_inicio: string,
        fecha_final: string,
        estado: string){

        this.id=id;
        this.descuento_nombre = descuento_nombre;
        this.descuento = descuento;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final ; 
        this.estado= estado;
        
    }
    
    
    
}