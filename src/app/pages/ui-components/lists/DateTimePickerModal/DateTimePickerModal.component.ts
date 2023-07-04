import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-DateTimePickerModal',
  templateUrl: './DateTimePickerModal.component.html',
  styleUrls: ['./DateTimePickerModal.component.css']
})
export class DateTimePickerModalComponent {

  @Output() dateTimeSelected = new EventEmitter<Date>();

  dateTimeControl = new FormControl();

  onDateTimeSelected(): void {
    const selectedDateTime = this.dateTimeControl.value;
    this.dateTimeSelected.emit(selectedDateTime);
  }
}