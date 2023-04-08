import { LoansService } from './../../../services/loans.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILoan } from 'src/app/interfaces/loan';
import Swal from 'sweetalert2';

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

  constructor(private loansService: LoansService, private route: ActivatedRoute){}

  register(){
    const loan : ILoan = this.loanForm.value as ILoan

    this.loansService.registerLoan(this.clientCpf, loan).subscribe(
      (result)=>{
        console.log(result)
        Swal.fire({
          title: 'Success',
          text: 'Loan data created',
          icon: 'success',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        }
        ).then(() => {
          window.location.reload();
        })
      }, error =>{
        console.error("Loan couldn't be created",error);
        Swal.fire({
          title: 'Failure',
          text: 'Loan data not created',
          icon: 'error',
          color: 'rgb(240, 248, 255)',
          background: 'rgb(39, 39, 39)'
        }
        )
      }
    )
  }
}
