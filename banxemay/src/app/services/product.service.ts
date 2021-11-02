import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpObtions = {
    headers:new HttpHeaders({'Content-Type' : 'Application/json'})};
    apiUrl = 'https://6087aeb6a3b9c200173b8734.mockapi.io/product';
  constructor(private http:HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe();
    
  }
  searchProduct(maMH:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.apiUrl}/${maMH}`).pipe();
  }
}
