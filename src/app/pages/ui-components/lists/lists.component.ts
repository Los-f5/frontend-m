import {Component, Input} from '@angular/core';
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

  contador: number = 1; // Valor inicial del contador
  @Input()
  precio: number=180;
  
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



  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AppAlerta);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  panelOpenState = false;
  

}
