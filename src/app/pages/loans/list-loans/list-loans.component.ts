import { ClientsService } from './../../../services/clients.service';
import { LoansService } from './../../../services/loans.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoan } from 'src/app/interfaces/loan';
import {showSuccessAlert, showErrorAlert} from 'src/assets/util-sweetalert'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent {
  loans: ILoan[] = [];
  clientCpf = String( this.route.snapshot.paramMap.get("cpf"));

  constructor(private loansService: LoansService, 
    private routeRedirect: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
        this.loansService.findAllLoan(this.clientCpf).subscribe(result=>{
          this.loans = result;
        }, error => {
        console.error(error)
        this.routeRedirect.navigate([""])
      })
    
  }

  delete(id: number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      color: 'rgb(240, 248, 255)',
      background: 'rgb(39, 39, 39)',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
      this.loansService.deleteLoan(this.clientCpf, id).subscribe(()=>{
        showSuccessAlert('The loan data has been deleted')
      }, error =>{
        console.error("Couldn't be deleted",error)
        showErrorAlert('Loan has not been deleted')
      })
    })
    
  }



}
