import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasswordResetComponent} from './login/password-reset/password-reset.component';
import {LoginComponent} from './login/login.component';
import {ClientFormComponent} from './login/client-form/client-form.component';
import {ErrorComponent} from './login/password-reset/error/error.component';
import {EditProfileComponent} from './logged/client/edit-profile/edit-profile.component';
import {ChangeEmailComponent} from './logged/client/change-email/change-email.component';
import {UpdateSuccessComponent} from './logged/client/change-email/update-success/update-success.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'forgetPassword', component: PasswordResetComponent },
  { path: 'forgetPassword/error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: ClientFormComponent  },
  { path: 'editProfile', component: EditProfileComponent  },
  { path: 'changeEmail', component: ChangeEmailComponent  },
  { path: 'updateSuccess', component: UpdateSuccessComponent  },
  { path: 'logged/client/changeemail', component: ChangeEmailComponent   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

