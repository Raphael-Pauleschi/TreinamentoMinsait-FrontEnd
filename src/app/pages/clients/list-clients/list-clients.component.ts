import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from './../../../services/clients.service';
import { Component } from '@angular/core';

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
}
