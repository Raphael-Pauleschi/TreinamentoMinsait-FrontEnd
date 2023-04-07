import { IClient } from './../interfaces/client';
import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  endpoint = "clients";
  api = environment.api;
  constructor(private http: HttpClient) { }

  findAllClients(){
    return this.http.get<IClient[]>(`${this.api}/${this.endpoint}`)
  }

  findOneClient(cpf: String){
    return this.http.get<IClient>(`${this.api}/${this.endpoint}/${cpf}`)
  }

  registerClient(client: IClient){
    return this.http.post(`${this.api}/${this.endpoint}`,client)
  }
  
  editCient(cpf:String, client: IClient){
    return this.http.put<IClient>(`${this.api}/${this.endpoint}/${cpf}`,client)
  }

  deleteClient(cpf:String){
    return this.http.delete(`${this.api}/${this.endpoint}/${cpf}`)
  }


}
