import { Component, OnInit , Inject} from '@angular/core';
import { FormControl , Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DescuentoService } from 'src/app/services/descuento.service';
import { Descuento } from 'src/app/interface/Descuento';

import Swal from 'sweetalert2';


import * as moment from 'moment';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';


@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',

})


export class AppTooltipsComponent implements OnInit {


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  
  //  disabled
  disabled = new FormControl(false);

  // show and hide
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  // change message
  message = new FormControl('Info about the action');
  // form 



  //form apis 
  myForm: FormGroup;

  //variable de list descuento 

  list_desc: Descuento = new Descuento('', '', '', '', '', '');
  

  descuentos: Descuento[] = [];

  desc: Descuento;
  data_authority: number = 1;

  //

  id: string;
  descuento_nombre: string;
  descuento : string; 
  fecha_inicio: string; 
  fecha_final: string; 
  estado: string;

  constructor(private formBuilder: FormBuilder , private descuentoService: DescuentoService, private router: Router) {

    this.myForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      porcentaje: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
  }


  ngOnInit() {
    this.getDescuentos();
  }


 
  // list descuento
  getDescuentos() {
    this.descuentoService.getDescuento().subscribe(
      (resp: any) => {
        this.descuentos = resp.data;
        console.log(this.descuentos); 
      },
      error => {
        console.log(error);
      }
    );
  }

  // agregar descuento 

  registrarDescuento(): void {


    this.desc = new Descuento( 
      this.id, this.descuento_nombre, this.descuento , this.fecha_inicio , this.fecha_final,
      this.estado);

    this.descuentoService.postDescuento(this.desc).subscribe(
      data => {

      },
      err => {


        console.log(err);
      }
    );


  }


   /* registrarDescuento(){

    if(!this.list_desc.descuento_nombre.trim()){
      Swal.fire(
        'Campos Incompletos!',
        'Coloque un Codigo de Descuento',
        'info'
      )
      return;
    }

    this.descuentoService.postDescuento(this.list_desc).subscribe({
      next: () => {
        Swal.fire(
          'Categoria registrada!',
          'Felicidades',
          'success'
        )
        this.getDescuentos(); 
           
        this.list_desc.descuento_nombre = ''; 
        this.list_desc.descuento = '';
        this.list_desc.fecha_inicio = '';
        this.list_desc.fecha_final = '';
        
      },
      error: () => {
        Swal.fire(
          'No se pudo registrar el descuento pipipipi!',
          'Verifique codigo',
          'error'
        )
      }
    })
  }

  
   */
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      
    }
  }
  
  get name() {
    return this.myForm.get('name');
  }
  
  get porcentaje() {
    return this.myForm.get('email');
  }

  submitForm() {
    if (this.myForm.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.myForm.value);
    }
  }


  
}
