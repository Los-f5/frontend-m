import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html'
})
export class AuthButtonComponent  {

 // Inject the authentication service into your component through the constructor
 constructor(public auth: AuthService) {}


}
