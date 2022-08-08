import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { TrashComponent } from './Components/trash/trash.component';
import {AuthGuardGuard} from './auth-guard.guard'


const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path : 'login', component : LogInComponent},
  {path : 'forgotpassword', component : ForgotPasswordComponent},
  {path : 'forgotEmail', component : ForgotEmailComponent},
  {path : 'Dashboard', component : DashboardComponent,canActivate:[AuthGuardGuard],  
children:[
  {path:'notes', component : GetAllNotesComponent},
  {path:'archive', component : ArchiveComponent},
  {path:'trash', component : TrashComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
