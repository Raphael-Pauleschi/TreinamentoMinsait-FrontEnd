import { LoansService } from './../../../services/loans.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoan } from 'src/app/interfaces/loan';
import { ClientsService } from 'src/app/services/clients.service';
import { RelationsService } from 'src/app/services/relations.service';
import {showSuccessAlert, showErrorAlert} from 'src/assets/util-sweetalert'

@Component({
  selector: 'app-register-loans',
  templateUrl: './register-loans.component.html',
  styleUrls: ['./register-loans.component.css']
})
export class RegisterLoansComponent {
  loanForm = new FormGroup({
    initialValue: new FormControl(0.0, Validators.required),
    initialDate: new FormControl(new Date(), Validators.required),
    finalDate: new FormControl(new Date(), Validators.required),
    relation: new FormControl('BRONZE', Validators.required)
  })

  clientCpf = String(this.route.snapshot.paramMap.get('cpf'));
  relations : String[] = [];

  constructor(private loansService: LoansService, 
    private routeRedirect: Router,
    private relationsService: RelationsService,
    private route: ActivatedRoute){}

ngOnInit() {
    this.relationsService.getRelations().subscribe(result =>{
      this.relations = result;
    }, error =>{
    console.error(error)
    this.routeRedirect.navigate(['clients'])
  })
 
  
}

getRelationOptions() {
  return this.relations;
}

  register(){
    const loan : ILoan = this.loanForm.value as ILoan

    this.loansService.registerLoan(this.clientCpf, loan).subscribe(
      (result)=>{
        console.log(result)
        showSuccessAlert ('Loan data created')
      }, error =>{
        console.error("Loan couldn't be created",error);
        showErrorAlert( 'Loan data not created')
      }
    )
  }
}
