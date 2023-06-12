import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.html',
})

export class AppAlerta {}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
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
  
  
}
