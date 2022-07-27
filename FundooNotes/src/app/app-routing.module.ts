import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LogInComponent},
  {path : 'forgotpassword', component : ForgotPasswordComponent},
  {path : 'forgotEmail', component : ForgotEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
