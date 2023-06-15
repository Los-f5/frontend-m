import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.html',
})

export class AppAlerta {
  checked = false;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  
  holi: string;
  checked = false;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AppAlerta);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  panelOpenState = false;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  dni = new FormControl('');
  nom = new FormControl('');
  ape = new FormControl('');
  telf = new FormControl('');
  dir = new FormControl('');
  hora = new FormControl('');
  getdni(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  getnom(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  getape(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  gettelf(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  getdir(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  gethora(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  formulario: any[] =[
    {id: 1, a:'row', b:'col-6' , c:'100%', d:'Tipo de Documento', e:'option', f:'DNI', g:'option', h:'Carnet de extranjería', i:'option', j:'Pasaporte',}
  ];
  
  mostrar1: boolean = false;
  botonm1: boolean = true;
  botono1: boolean = false;
  botono: boolean= true;
  aea: number= 1;
  mostrarocultar1(){
    if(this.mostrar1){
      this.mostrar1=false;
      this.botonm1= true;
      this.botono1=false;
      this.botonm2 = false;
      this.botono = true;
      this.aea--;
    }else{
      this.mostrar1=true;
      this.botono1 = true;
      this.botonm1 = false;
      this.botonm2 = true;
      this.botono = false;
      this.aea++; 
    }

  }
  mostrar2: boolean = false;
  botonm2: boolean = false;
  botono2: boolean = false;
  mostrarocultar2(){
    if(this.mostrar2){
      this.mostrar2=false;
      this.botono1=true;
      this.botono2=false;
      this.botonm2=true;
      this.botonm3=false;
      this.aea--;
    }else{
      this.mostrar2=true;
      this.botono1=false;
      this.botono2=true;
      this.botonm2=false;
      this.botonm3=true;
      this.aea++; 
    }
  }
  mostrar3: boolean = false;
  botonm3: boolean = false;
  botono3: boolean = false;
  mostrarocultar3(){
    if(this.mostrar3){
      this.mostrar3=false;
      this.botono2=true;
      this.botono3=false;
      this.botonm3=true;
      this.botonm4=false;
      this.aea--;
    }else{
      this.mostrar3=true;
      this.botono2=false;
      this.botono3=true;
      this.botonm3=false;
      this.botonm4=true;
      this.aea++; 
    }
  }
  mostrar4: boolean = false;
  botonm4: boolean = false;
  botono4: boolean = false;
  mostrarocultar4(){
    if(this.mostrar4){
      this.mostrar4=false;
      this.botono3=true;
      this.botono4=false;
      this.botonm4=true;
      this.botonm5=false;
      this.aea--;
    }else{
      this.mostrar4=true;
      this.botono3=false;
      this.botono4=true;
      this.botonm4=false;
      this.botonm5=true;
      this.aea++; 
    }
  }
  mostrar5: boolean = false;
  botonm5: boolean = false;
  botono5: boolean = false;
  mostrarocultar5(){
    if(this.mostrar5){
      this.mostrar5=false;
      this.botono4=true;
      this.botono5=false;
      this.botonm5=true;
      this.botonm6=false;
      this.aea--;
    }else{
      this.mostrar5=true;
      this.botono4=false;
      this.botono5=true;
      this.botonm5=false;
      this.botonm6=true;
      this.aea++; 
    }
  }
  mostrar6: boolean = false;
  botonm6: boolean = false;
  botono6: boolean = false;
  mostrarocultar6(){
    if(this.mostrar6){
      this.mostrar6=false;
      this.botono5=true;
      this.botono6=false;
      this.botonm6=true;
      this.botonm7=false;
      this.aea--;
    }else{
      this.mostrar6=true;
      this.botono5=false;
      this.botono6=true;
      this.botonm6=false;
      this.botonm7=true;
      this.aea++; 
    }
  }
  mostrar7: boolean = false;
  botonm7: boolean = false;
  botono7: boolean = false;
  mostrarocultar7(){
    if(this.mostrar7){
      this.mostrar7=false;
      this.botono6=true;
      this.botono7=false;
      this.botonm7=true;
      this.botonm8=false;
      this.aea--;
    }else{
      this.mostrar7=true;
      this.botono6=false;
      this.botono7=true;
      this.botonm7=false;
      this.botonm8=true;
      this.aea++; 
    }
  } 
  mostrar8: boolean = false;
  botonm8: boolean = false;
  botono8: boolean = false;
  mostrarocultar8(){
    if(this.mostrar8){
      this.mostrar8=false;
      this.botono7=true;
      this.botono8=false;
      this.botonm8=true;
      this.botonm9=false;
      this.aea--;
    }else{
      this.mostrar8=true;
      this.botono7=false;
      this.botono8=true;
      this.botonm8=false;
      this.botonm9=true;
      this.aea++; 
    }
  }
  mostrar9: boolean = false;
  botonm9: boolean = false;
  botono9: boolean = false;
  botona: boolean=false;
  mostrarocultar9(){
    if(this.mostrar9){
      this.mostrar9=false;
      this.botono8=true;
      this.botono9=false;
      this.botonm9=true;
      this.botona=false;
      this.aea--;
    }else{
      this.mostrar9=true;
      this.botono8=false;
      this.botono9=true;
      this.botonm9=false;
      this.botona=true;
      this.aea++; 
    }
  }
}
