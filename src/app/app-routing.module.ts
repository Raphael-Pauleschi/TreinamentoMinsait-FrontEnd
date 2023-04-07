import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListClientsComponent } from './pages/clients/list-clients/list-clients.component';
import { RegisterEditClientsComponent } from './pages/clients/register-edit-clients/register-edit-clients.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients', component : ListClientsComponent },
  {path: 'clients/register', component: RegisterEditClientsComponent},
  {path: 'clients/edit/:cpf', component: RegisterEditClientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
