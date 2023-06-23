import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  selectedDateTime: Date;

  updateDateTime(dateTime: Date): void {
    this.selectedDateTime = dateTime;
  }
}