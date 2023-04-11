import { ClientsService } from './../../../services/clients.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import {showSuccessAlert, showErrorAlert} from 'src/assets/util-sweetalert'

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
    streetName: new FormControl('', Validators.required),
    streetNumber: new FormControl('', Validators.required)
  })

  clientCpf = this.route.snapshot.paramMap.get('cpf');

  constructor(private clientsService: ClientsService, 
    private route: ActivatedRoute,
    private routeDirect: Router
    ) { }

  ngOnInit() {

    if (this.clientCpf) {
      this.clientsService.findOneClient(this.clientCpf).subscribe(
        (client: IClient) => {
          this.clientForm.setValue({
            cpf: client.cpf,
            phoneNumber: client.phoneNumber,
            monthlyIncome: client.monthlyIncome,
            cep: client.cep,
            streetName: client.streetName,
            streetNumber: client.streetNumber
          })
        }, error => {
          console.error("Client not found", error)
          this.routeDirect.navigate(['clients']);
          })

    }

  }
  registerOrEdit() {
    const client: IClient = this.clientForm.value as IClient
    if (this.clientCpf) {

      this.clientsService.editCient(this.clientCpf, client).subscribe(() => {
        showSuccessAlert("Cliet data updated")
      }, error =>{
        console.error("Client couldn't be updated",error);
       showErrorAlert("Client hasn't been updated")
      })
        
    } else {

      this.clientsService.registerClient(client).subscribe(() => {
        showSuccessAlert("Client data created")
      }, error =>{
        console.error("Client couldn't be created",error);
       showErrorAlert("Client not added");
      })
    }


  }

}



