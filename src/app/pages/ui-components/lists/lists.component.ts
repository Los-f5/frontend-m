import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Inject,
  OnDestroy,
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { style } from '@angular/animations';

import { DateTimePickerModalComponent } from './DateTimePickerModal/DateTimePickerModal.component';

import { DateTimeService } from 'src/app/services/date-time.service';

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
})
export class AppListsComponent {
  
  holi: string;
  checked = false; checked2 = false; checked3 = false; checked4 = false; checked5 = false;
  checked6 = false; checked7 = false; checked8 = false; checked9 = false; checked1 = false;
  serializedDate = new FormControl(new Date().toISOString());

  contador: number = 1; // Valor inicial del contador
  @Input()
  precio: number=180;
  
  myForm: FormGroup;


  selectedDateTime: Date;
  selectedTimeHour: string;
  selectedTimeMinute: string;

  availableHours: string[] = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
  availableMinutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

  formattedDateTime: string;

  constructor(private dialog: MatDialog , public  dateTimeService: DateTimeService ) {
  
    this.selectedDateTime = new Date();

  }



  openDateTimePickerModal(): void {
    const dialogRef = this.dialog.open(DateTimePickerModalComponent, {
      width: '500px',
      data: this.selectedDateTime
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedDateTime = result;
      }
    });
  }

  updateDateTime(dateTime: Date): void {
    this.dateTimeService.updateDateTime(dateTime);
  }
  
  

  
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
  





}
