import { Injectable } from '@angular/core';
import { Xetaycon } from './../models/xetaycon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XetayconService {
  httpObtions = {
    headers:new HttpHeaders({'Content-Type' : 'Application/json'})
  };
  apiUrl = 'https://6087aeb6a3b9c200173b8734.mockapi.io/xetaycon';
  constructor(private http:HttpClient) { }
  getAllXetaycon(): Observable<Xetaycon[]> {
    return this.http.get<Xetaycon[]>(this.apiUrl).pipe();
  }
}
