import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordResetComponent} from './login/password-reset/password-reset.component';
import {LoginComponent} from './login/login.component';
import {ClientFormComponent} from './login/client-form/client-form.component';
import {ErrorComponent} from './login/password-reset/error/error.component';
<<<<<<< HEAD
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ChangeEmailComponent} from './change-email/change-email.component';
import {UpdateSuccessComponent} from './update-success/update-success.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';
=======
import {EditProfileComponent} from './logged/client/edit-profile/edit-profile.component';
import {ChangeEmailComponent} from './logged/client/change-email/change-email.component';
import {UpdateSuccessComponent} from './logged/client/change-email/update-success/update-success.component';
>>>>>>> f20fdbf6e0ea71c8c46003b1d4c0ef5dfa8d03e3


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'forgetPassword', component: PasswordResetComponent },
  { path: 'forgetPassword/error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: ClientFormComponent  },
  { path: 'editProfile', component: EditProfileComponent  },
  { path: 'changeEmail', component: ChangeEmailComponent  },
  { path: 'updateSuccess', component: UpdateSuccessComponent  },
<<<<<<< HEAD
  { path: 'registerSuccess', component: RegisterSuccessComponent  },
=======
  { path: 'logged/client/changeemail', component: ChangeEmailComponent   }

>>>>>>> f20fdbf6e0ea71c8c46003b1d4c0ef5dfa8d03e3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

