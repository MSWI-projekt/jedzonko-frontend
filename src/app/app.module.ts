import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordResetComponent } from './login/password-reset/password-reset.component';
import { ClientFormComponent } from './login/client-form/client-form.component';
import { ErrorComponent } from './login/password-reset/error/error.component';
<<<<<<< HEAD
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
=======
import { EditProfileComponent } from './logged/client/edit-profile/edit-profile.component';
import { ChangeEmailComponent } from './logged/client/change-email/change-email.component';
import { UpdateSuccessComponent } from './logged/client/change-email/update-success/update-success.component';

>>>>>>> f20fdbf6e0ea71c8c46003b1d4c0ef5dfa8d03e3

const appRoutes: Routes = [

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordResetComponent,
    ClientFormComponent,
    ErrorComponent,
    EditProfileComponent,
    ChangeEmailComponent,
    UpdateSuccessComponent,
<<<<<<< HEAD
    RegisterSuccessComponent,
=======

>>>>>>> f20fdbf6e0ea71c8c46003b1d4c0ef5dfa8d03e3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
