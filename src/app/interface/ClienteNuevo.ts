export class ClienteNuevo {

   
    nombre : string;
    apellido_materno: string;
    apellido_paterno: string;
    fechaNacimiento: string;
    fecha_reserva: string;
    identificacion: string;
    direccion: string;
    telefono: string;
    correo: string;
    estado: string;


    constructor(
       
         nombre: string,
         apellido_materno: string,
         apellido_paterno: string,
         fechaNacimiento: string,
         fecha_reserva: string,
         identificacion: string,
         direccion: string,
         telefono: string,
         correo: string,
         estado: string

    ) {
              
        this.nombre = nombre;
        this.apellido_materno = apellido_materno;
        this.apellido_paterno = apellido_paterno;
        this.fechaNacimiento = fechaNacimiento;
        this.fecha_reserva = fecha_reserva;
        this.identificacion = identificacion;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
        this.estado = estado;

        
     }
} 


