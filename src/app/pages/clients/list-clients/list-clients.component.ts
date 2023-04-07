import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from './../../../services/clients.service';
import { Component } from '@angular/core';
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
    this.clientsService.deleteClient(cpf).subscribe(()=>{
      Swal.fire({
        title:'Success',
        text:'The data has been deleted',
        icon:'success',
        color: 'rgb(240, 248, 255)',
        background: 'rgb(39, 39, 39)'
      }
      ).then(()=>{
        window.location.reload();
      })
    }, error =>{
      console.error("Couldn't be deleted",error)
      Swal.fire({
        title: 'Failure',
        text: 'Client has not been deleted',
        icon: 'error',
        color: 'rgb(240, 248, 255)',
        background: 'rgb(39, 39, 39)'
      })
    }
    )
  }
}
