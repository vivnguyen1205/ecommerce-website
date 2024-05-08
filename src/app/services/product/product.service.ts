import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';
@Injectable({
  providedIn: 'root'

})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORIES);
  }
}

