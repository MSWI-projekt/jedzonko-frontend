import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordResetComponent} from './login/password-reset/password-reset.component';
import {LoginComponent} from './login/login.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {ErrorComponent} from './login/password-reset/error/error.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'forgetPassword', component: PasswordResetComponent },
  { path: 'forgetPassword/error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: ClientFormComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
