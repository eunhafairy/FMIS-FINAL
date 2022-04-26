import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementaryListComponent } from './elements/elementary-list/elementary-list.component';
import { AuthInterceptor } from './guards/auth-interceptors';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EducationCardComponent } from './elements/education-card/education-card.component';
import { DialogAddSchoolComponent } from './elements/dialog-add-school/dialog-add-school.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ElementaryListComponent,
    DashboardComponent,
    EducationCardComponent,
    DialogAddSchoolComponent
  ],

  imports: [

    MatTabsModule,
    BrowserModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule, MatDividerModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule, MatIconModule, MatExpansionModule,
    MatDialogModule,
    BrowserAnimationsModule, ReactiveFormsModule,

    HttpClientModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS , useClass : AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
