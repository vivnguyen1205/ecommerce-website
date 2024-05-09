
import { HttpClient, withFetch } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
}

