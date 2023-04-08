import { LoansService } from './../../../services/loans.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILoan } from 'src/app/interfaces/loan';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent {
  loans: ILoan[] = [];
  clientCpf = String( this.route.snapshot.paramMap.get("cpf"));

  constructor(private loansService: LoansService, private route: ActivatedRoute){}

  ngOnInit(){
    this.loansService.findAllLoan(this.clientCpf).subscribe(result=>{
      console.log(result)
      this.loans = result;
    })
  }

  delete(id: number){
    this.loansService.deleteLoan(this.clientCpf, id).subscribe(()=>{
      Swal.fire({
        title:'Success',
        text:'The loan data has been deleted',
        icon: 'success',
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
        text: 'Loan has not been deleted',
        icon: 'error',
        color: 'rgb(240, 248, 255)',
        background: 'rgb(39, 39, 39)'
      })
    })
  }



}
