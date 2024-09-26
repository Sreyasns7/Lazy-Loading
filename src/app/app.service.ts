import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  ProductResponse } from './product';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  

  constructor(private http: HttpClient) {}

  getProducts(skip: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      `https://dummyjson.com/products?limit=10&skip=${skip}`
    );
  }
}