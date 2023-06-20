import { Component } from '@angular/core';
import { FormControl , Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
})
export class AppTooltipsComponent {
  //  disabled
  disabled = new FormControl(false);

  // show and hide
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  // change message
  message = new FormControl('Info about the action');
  // form 



  //form apis 
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      porcentaje: new FormControl('', [Validators.required, Validators.email]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      
    }
  }
  
  get name() {
    return this.myForm.get('name');
  }
  
  get porcentaje() {
    return this.myForm.get('email');
  }

  submitForm() {
    if (this.myForm.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.myForm.value);
    }
  }


  
}
