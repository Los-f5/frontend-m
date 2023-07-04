import {
  Component,
  Input,
  ViewChild,
  ElementRef 
} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DateTimePickerModalComponent } from './DateTimePickerModal/DateTimePickerModal.component';

import { DateTimeService } from 'src/app/services/date-time.service';

import { ClienteNuevo } from 'src/app/interface/ClienteNuevo';
import { ClienteService } from 'src/app/services/cliente.service';

import { Reniec } from 'src/app/interface/Reniec';
import { personareniecservice } from 'src/app/services/personareniec.service';

import { Buscarperson } from 'src/app/interface/Buscarperson';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerta',
  
  templateUrl: './alerta.html',
  styleUrls: ['./list.component.scss'],
})



export class AppAlerta {
  checked = false;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./list.component.scss'],
})
export class AppListsComponent {
  
 



  contador: number = 1; // Valor inicial del contador
  @Input()
  precio: number=180;
  
  myForm: FormGroup;



  selectedDateTime: Date;

 //variables de cliente

 clienteNuevo : ClienteNuevo;

  id: Number;
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


  nombres_pers: string;
  apellido_pat: string;
  apellido_mat: string;

  dni:string;

 

  constructor(private dialog: MatDialog , 
    public  dateTimeService: DateTimeService , 
    private clienteService : ClienteService , 
    private router: Router, 
    private reniecservice: personareniecservice) { }



  //contador 
  
agregarPanel() {
  if (this.contador < 11) {
    this.contador++;
  }
}

eliminarPanel() {
  if (this.contador > 1) {
    this.contador--;
  }
}
getFormattedNumber(index: number) {
  return (index + 1).toString().padStart(2, '0');
}

getRange() {
  return Array.from({ length: this.contador }, (_, i) => i);
}

  panelOpenState = false;
  

  // agregar cliente  

  onNuevoCliente():void {



    this.clienteNuevo = new ClienteNuevo (this.nombre, this.apellido_materno, this.apellido_paterno , this.fechaNacimiento
      , this.fecha_reserva, this.identificacion, this.direccion, this.telefono, this.correo, this.estado)

    this.clienteService.postCliente(this.clienteNuevo).subscribe(
      data => {
        console.log(data);
      }
    )



  }

  
}
