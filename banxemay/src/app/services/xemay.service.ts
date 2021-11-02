import { Injectable } from '@angular/core';
import { Xemay } from './../models/xemay.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XemayService {
  httpObtions = {
    headers:new HttpHeaders({'Content-Type' : 'Application/json'})
  };
  apiUrl = 'https://6087aeb6a3b9c200173b8734.mockapi.io/xemay';
  constructor(private http:HttpClient) { }

  getAllXemay(): Observable<Xemay[]> {
    return this.http.get<Xemay[]>(this.apiUrl).pipe();
  }
  searchXemay(maMH:number):Observable<Xemay>
  {
    return this.http.get<Xemay>(`${this.apiUrl}/${maMH}`).pipe();
  }
}
