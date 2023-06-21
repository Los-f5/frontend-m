import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

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
  
  myForm: FormGroup;


  selectedDate: Date;
  selectedHour: string;
  occupiedHours: Date[] = [];

  availableHours: string[] = [];

  constructor( ) {

    this.selectedDate = new Date();
    this.updateAvailableHours();

  }


  updateAvailableHours() {
    const startHour = moment(this.selectedDate).hour(9).minute(0);
    const endHour = moment(this.selectedDate).hour(17).minute(0);

    const interval = 30;
    const hours = [];

    let currentHour = startHour.clone();
    while (currentHour.isSameOrBefore(endHour)) {
      const hourStr = currentHour.format('HH:mm');

      if (!this.isHourOccupied(currentHour)) {
        hours.push(hourStr);
      }

      currentHour.add(interval, 'minutes');
    }

    this.availableHours = hours;
  }

  isHourOccupied(hour: moment.Moment): boolean {
    return this.occupiedHours.some(occupiedHour => {
      return moment(occupiedHour).isSame(hour, 'minute');
    });
  }

  selectHour(hour: string) {
    const selectedDateTime = moment(this.selectedDate)
      .hour(Number(hour.substring(0, 2)))
      .minute(Number(hour.substring(3)));

    this.occupiedHours.push(selectedDateTime.toDate());
    this.updateAvailableHours();
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
