import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Xetayga } from './../models/xetayga.model';
@Injectable({
  providedIn: 'root'
})
export class XetaygaService {
  httpOptions = {
    headers:new HttpHeaders({'Content-Type' : 'Application/json'})
  };
  apiUrl ='https://6087aeb6a3b9c200173b8734.mockapi.io/xetayga';

  constructor(private http:HttpClient) { }

  getAllXetayga(): Observable<Xetayga[]>{
    return this.http.get<Xetayga[]>(this.apiUrl).pipe();
  }
}
