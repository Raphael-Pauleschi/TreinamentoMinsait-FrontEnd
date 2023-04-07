import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../interfaces/client';
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
}
