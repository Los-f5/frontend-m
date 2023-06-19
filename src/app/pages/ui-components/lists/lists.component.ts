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
  checked = false; checked2 = false; checked3 = false; checked4 = false; checked5 = false;
  checked6 = false; checked7 = false; checked8 = false; checked9 = false; checked1 = false;
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
  }email1 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage1() {
    if (this.email1.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email1.hasError('email') ? 'Not a valid email' : '';
  }email2 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage2() {
    if (this.email2.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email2.hasError('email') ? 'Not a valid email' : '';
  }email3 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage3() {
    if (this.email3.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email3.hasError('email') ? 'Not a valid email' : '';
  }email4 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage4() {
    if (this.email4.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email4.hasError('email') ? 'Not a valid email' : '';
  }email5 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage5() {
    if (this.email5.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email5.hasError('email') ? 'Not a valid email' : '';
  }email6 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage6() {
    if (this.email6.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email6.hasError('email') ? 'Not a valid email' : '';
  }email7 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage7() {
    if (this.email7.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email7.hasError('email') ? 'Not a valid email' : '';
  }email8 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage8() {
    if (this.email8.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email8.hasError('email') ? 'Not a valid email' : '';
  }email9 = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage9() {
    if (this.email9.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email9.hasError('email') ? 'Not a valid email' : '';
  }
  dni = new FormControl(''); dni2 = new FormControl(''); dni4 = new FormControl(''); dni6 = new FormControl(''); dni8 = new FormControl('');
  dni1 = new FormControl(''); dni3 = new FormControl(''); dni5 = new FormControl(''); dni7 = new FormControl(''); dni9 = new FormControl('');
  getdni(){
    if (this.dni.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni1(){
    if (this.dni1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni2(){
    if (this.dni2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni3(){
    if (this.dni3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni4(){
    if (this.dni4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni5(){
    if (this.dni5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni6(){
    if (this.dni6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni7(){
    if (this.dni7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni8(){
    if (this.dni8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdni9(){
    if (this.dni9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  nom = new FormControl(''); nom2 = new FormControl(''); nom4 = new FormControl(''); nom6 = new FormControl(''); nom8 = new FormControl('');
  nom1 = new FormControl(''); nom3 = new FormControl(''); nom5 = new FormControl(''); nom7 = new FormControl(''); nom9 = new FormControl('');
  getnom(){
    if (this.nom.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom1(){
    if (this.nom1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom2(){
    if (this.nom2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom3(){
    if (this.nom3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom4(){
    if (this.nom4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom5(){
    if (this.nom5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom6(){
    if (this.nom6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom7(){
    if (this.nom7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom8(){
    if (this.nom8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getnom9(){
    if (this.nom9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  ape = new FormControl(''); ape2 = new FormControl(''); ape4 = new FormControl(''); ape6 = new FormControl(''); ape8 = new FormControl('');
  ape1 = new FormControl(''); ape3 = new FormControl(''); ape5 = new FormControl(''); ape7 = new FormControl(''); ape9 = new FormControl('');
  getape(){
    if (this.ape.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape1(){
    if (this.ape1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape2(){
    if (this.ape2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape3(){
    if (this.ape3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape4(){
    if (this.ape4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape5(){
    if (this.ape5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape6(){
    if (this.ape6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape7(){
    if (this.ape7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape8(){
    if (this.ape8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getape9(){
    if (this.ape9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  telf = new FormControl(''); telf2 = new FormControl(''); telf4 = new FormControl(''); telf6 = new FormControl(''); telf8 = new FormControl('');
  telf1 = new FormControl(''); telf3 = new FormControl(''); telf5 = new FormControl(''); telf7 = new FormControl(''); telf9 = new FormControl('');
  gettelf(){
    if (this.telf.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf1(){
    if (this.telf1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf2(){
    if (this.telf2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf3(){
    if (this.telf3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf4(){
    if (this.telf4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf5(){
    if (this.telf5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf6(){
    if (this.telf6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf7(){
    if (this.telf7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf8(){
    if (this.telf8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gettelf9(){
    if (this.telf9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  dir = new FormControl(''); dir2 = new FormControl(''); dir4 = new FormControl(''); dir6 = new FormControl(''); dir8 = new FormControl('');
  dir1 = new FormControl(''); dir3 = new FormControl(''); dir5 = new FormControl(''); dir7 = new FormControl(''); dir9 = new FormControl('');
  getdir(){
    if (this.dir.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir1(){
    if (this.dir1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir2(){
    if (this.dir2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir3(){
    if (this.dir3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir4(){
    if (this.dir4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir5(){
    if (this.dir5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir6(){
    if (this.dir6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir7(){
    if (this.dir7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir8(){
    if (this.dir8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }getdir9(){
    if (this.dir9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  hora = new FormControl(''); hora2 = new FormControl(''); hora4 = new FormControl(''); hora6 = new FormControl(''); hora8 = new FormControl('');
  hora1 = new FormControl(''); hora3 = new FormControl(''); hora5 = new FormControl(''); hora7 = new FormControl(''); hora9 = new FormControl('');
  gethora(){
    if (this.hora.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora1(){
    if (this.hora1.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora2(){
    if (this.hora2.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora3(){
    if (this.hora3.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora4(){
    if (this.hora4.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora5(){
    if (this.hora5.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora6(){
    if (this.hora6.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora7(){
    if (this.hora7.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora8(){
    if (this.hora8.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }gethora9(){
    if (this.hora9.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return;
  }
  promocion = 0;
  precio = 180;
  mostrar1: boolean = false;
  botonm1: boolean = true;
  botono1: boolean = false;
  botono: boolean= true;
  aea: number= 1;
  cer: string = "0";

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
      this.cer = "0";
    }else{
      this.mostrar9=true;
      this.botono8=false;
      this.botono9=true;
      this.botonm9=false;
      this.botona=true;
      this.aea++;
      this.cer = "";
    }
  }
}
