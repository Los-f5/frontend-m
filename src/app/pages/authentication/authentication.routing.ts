import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';

import { AuthButtonComponent } from './auth-button/auth-button.component';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AuthButtonComponent,
      },
      {
        path: 'register',
        component: AuthButtonComponent,
      },
      {
        path: 'auth-button',
        component: AuthButtonComponent,
      },
    ],
  },
];
