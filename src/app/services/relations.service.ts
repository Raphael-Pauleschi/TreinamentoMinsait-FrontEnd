import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationsService {
  api = environment.api;
  endpoint = "relations"

  constructor(private http: HttpClient) { }

  getRelations(){
    return this.http.get<String[]>(`${this.api}/${this.endpoint}`);
  }
}
