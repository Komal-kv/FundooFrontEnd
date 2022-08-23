import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotEmailComponent } from './Components/forgot-email/forgot-email.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayComponent } from './Components/display/display.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdateComponent } from './Components/update/update.component';
import {MatMenuModule} from '@angular/material/menu';
import { AuthserviceService } from './Services/authservice/authservice.service';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './Pipes/filter.pipe';
import { ParentComponent } from './Components/parent/parent.component';
import { SiblingComponent } from './Components/sibling/sibling.component';
import { DemoComponent } from './Components/demo/demo.component';
import { Demo1Component } from './Components/demo1/demo1.component';
import { Demo2Component } from './Components/demo2/demo2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ForgotPasswordComponent,
    ForgotEmailComponent,
    DashboardComponent,
    GetAllNotesComponent,
    ArchiveComponent,
    TrashComponent,
    CreateNoteComponent,
    IconsComponent,
    DisplayComponent,
    UpdateComponent,
    FilterPipe,
    ParentComponent,
    SiblingComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatCardModule,
    FlexLayoutModule,MatDialogModule,MatMenuModule,MatSnackBarModule,
    HttpClientModule, MatSidenavModule, MatToolbarModule,MatListModule,MatIconModule 
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
