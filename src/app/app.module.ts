import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapnavComponent } from './tapnav/tapnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebarService } from './sidenav/sidebar.service';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './model/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './exponential-strength.pipe';
import { AddUserComponent } from './add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    TapnavComponent,
    SidenavComponent,
    MiddleComponent,
    RightComponent,
    TruncatePipe,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SidebarService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
