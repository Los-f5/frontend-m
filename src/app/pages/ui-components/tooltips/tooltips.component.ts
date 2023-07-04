import { Component, OnInit , Inject} from '@angular/core';
import { FormControl , Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DescuentoService } from 'src/app/services/descuento.service';
import { DescuentoNuevo} from 'src/app/interface/DescuentoNuevo';



@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  
  
})




export class AppTooltipsComponent implements OnInit {



 
  descuentoNuevo : DescuentoNuevo;


  //variable de list descuento

  descuentos: any;
  //
  // desc: Descuento;
  // data_authority: number = 1;

  descuento : string;
  descuento_nombre : string;
  fecha_inicio: string;
  fecha_final: string;

  constructor(private formBuilder: FormBuilder , private descuentoService: DescuentoService, private router: Router) {

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


  onDescuentoNew():void {



    this.descuentoNuevo = new DescuentoNuevo(this.descuento_nombre,this.descuento, this.fecha_inicio, this.fecha_final)

    this.descuentoService.postDescuento(this.descuentoNuevo).subscribe(
      data => {
        this.getDescuentos();

      }



    )



  }





  // registrarDescuento(): void {
  //
  //
  //   this.desc = new Descuento(
  //     this.id, this.descuento_nombre, this.descuento , this.fecha_inicio , this.fecha_final,
  //     this.estado);
  //
  //   this.descuentoService.postDescuento(this.desc).subscribe(
  //     data => {
  //
  //     },
  //     err => {
  //
  //
  //       console.log(err);
  //     }
  //   );
  //
  //
  // }


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
   
  }


}
