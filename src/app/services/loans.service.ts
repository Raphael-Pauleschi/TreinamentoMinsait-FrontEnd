import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ILoan } from '../interfaces/loan';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  routeLink = `${environment.api}/clients`
  endpoint = "loans"

  constructor(private http: HttpClient) { }

  findAllLoan(cpf: String){
    return this.http.get<ILoan[]>(`${this.routeLink}/${cpf}/${this.endpoint}`);
  }

  findOneLoan(cpf:String, id:number){
    return this.http.get<ILoan>(`${this.routeLink}/${cpf}/${this.endpoint}/${id}`)
  }

  registerLoan(cpf: String, loan: ILoan){
    return this.http.post(`${this.routeLink}/${cpf}/${this.endpoint}`,loan);
  }

  deleteLoan(cpf: String, id: number){
    return this.http.delete(`${this.routeLink}/${cpf}/${this.endpoint}/${id}`)
  }


}

