import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';
import { RegisterEditClientsComponent } from './pages/clients/register-edit-clients/register-edit-clients.component';
import { ListLoansComponent } from './pages/loans/list-loans/list-loans.component';
import { RegisterLoansComponent } from './pages/loans/register-loans/register-loans.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients', component : ListClientsComponent },
  {path: 'clients/register', component: RegisterEditClientsComponent},
  {path: 'clients/edit/:cpf', component: RegisterEditClientsComponent},
  {path: 'clients/:cpf/loans', component: ListLoansComponent},
  {path: 'clients/:cpf/loans/register', component: RegisterLoansComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
