export class DescuentoNuevo {
  descuento_nombre: string;
  descuento: string;
  fecha_inicio: string;
  fecha_final: string;

  constructor(descuento_nombre: string, descuento: string, fecha_inicio: string, fecha_final: string) {
    this.descuento_nombre = descuento_nombre;
    this.descuento = descuento;
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;


  }


}
