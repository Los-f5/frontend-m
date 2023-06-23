import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DateTimeService } from 'src/app/services/date-time.service';



@Component({
  selector: 'app-DateTimePickerModal',
  templateUrl: './DateTimePickerModal.component.html',
  styleUrls: ['./DateTimePickerModal.component.css']
})
export class DateTimePickerModalComponent implements OnInit {

  selectedDateTime: Date;
  selectedTimeHour: string;
  selectedTimeMinute: string;

  availableHours: string[] = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
  availableMinutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];


  formattedDateTime: string;


  constructor(public dialogRef: MatDialogRef<DateTimePickerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public initialDateTime: Date , private dateTimeService: DateTimeService) { 


      this.selectedDateTime = initialDateTime;
    this.selectedTimeHour = this.formatNumberWithLeadingZero(initialDateTime.getHours());
    this.selectedTimeMinute = this.formatNumberWithLeadingZero(initialDateTime.getMinutes());

    }

    onHourChange(): void {
      this.selectedTimeMinute = ''; // Reset selected minutes when changing the hour
    }
  
    onDateTimeChange(): void {
      const selectedHour = parseInt(this.selectedTimeHour, 10);
      const selectedMinute = parseInt(this.selectedTimeMinute, 10);
  
      if (!isNaN(selectedHour) && !isNaN(selectedMinute)) {
        this.selectedDateTime.setHours(selectedHour);
        this.selectedDateTime.setMinutes(selectedMinute);
      }
    }
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    private formatNumberWithLeadingZero(number: number): string {
      return number < 10 ? '0' + number : number.toString();
    }
    
    updateDateTime(dateTime: Date): void {
      this.dateTimeService.updateDateTime(dateTime);
    }

  ngOnInit() {
  }

}
