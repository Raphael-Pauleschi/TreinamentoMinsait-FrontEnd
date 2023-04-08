import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';
import { RegisterEditClientsComponent } from './pages/clients/register-edit-clients/register-edit-clients.component';
import { ListLoansComponent } from './pages/loans/list-loans/list-loans.component';
import { RegisterLoansComponent } from './pages/loans/register-loans/register-loans.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
      ListClientsComponent,
    RegisterEditClientsComponent,
    ListLoansComponent,
    RegisterLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
