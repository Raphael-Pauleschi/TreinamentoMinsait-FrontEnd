import { ClientsService } from './../../../services/clients.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-edit-clients',
  templateUrl: './register-edit-clients.component.html',
  styleUrls: ['./register-edit-clients.component.css']
})
export class RegisterEditClientsComponent {
  clientForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    monthlyIncome: new FormControl(0, Validators.required),
    cep: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required)
  })

  clientCpf = this.route.snapshot.paramMap.get('cpf');

  constructor(private clientsService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit() {

    if (this.clientCpf) {
      this.clientsService.findOneClient(this.clientCpf).subscribe(
        (client: IClient) => {
          this.clientForm.setValue({
            cpf: client.cpf,
            phoneNumber: client.phoneNumber,
            monthlyIncome: client.monthlyIncome,
            cep: client.cep,
            street: client.street,
            number: client.number
          })
        }, error => console.error("Client not found", error))

    }

  }
  registerOrEdit() {
    const client: IClient = this.clientForm.value as IClient
    if (this.clientCpf) {

      this.clientsService.editCient(this.clientCpf, client).subscribe(() => {
        Swal.fire({
          title: 'Success',
          text: 'Client data updated',
          icon: 'success',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        }
        ).then(() => {
          window.location.reload();
        })
      }, error =>{
        console.error("Client couldn't be updated",error);
        Swal.fire({
          title: 'Failure',
          text: 'Client data not updated',
          icon: 'error',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        }
        )
      })
        
    } else {

      this.clientsService.registerClient(client).subscribe(() => {
        Swal.fire({
          title: 'Success',
          text: 'Client added to database',
          icon: 'success',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        }
        ).then(() => {
          window.location.reload();
        })
      }, error =>{
        console.error("Client couldn't be created",error);
        Swal.fire({
          title: 'Failure',
          text: 'Client data not added',
          icon: 'error',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        })
      })
    }


  }

}


