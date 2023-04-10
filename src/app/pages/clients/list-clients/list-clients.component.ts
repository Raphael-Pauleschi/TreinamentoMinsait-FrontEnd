import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from './../../../services/clients.service';
import { Component } from '@angular/core';
import {showSuccessAlert, showErrorAlert} from 'src/assets/util-sweetalert'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {
  clients: IClient[] = [];

  constructor(private clientsService : ClientsService){}

  ngOnInit(){
    this.clientsService.findAllClients().subscribe((result: IClient[])=>{
      console.log(result);
      this.clients = result;
    })
  }

  delete(cpf: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      color: 'rgb(240, 248, 255)',
      background: 'rgb(39, 39, 39)',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
    this.clientsService.deleteClient(cpf).subscribe(()=>{
      showSuccessAlert('The data has been deleted')
    }, error =>{
      console.error("Couldn't be deleted",error)
      showErrorAlert('Client has not been deleted')
    }
    )})
  }
}
