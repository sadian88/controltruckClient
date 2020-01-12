import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckList1 } from '../models/checkList1';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChequeolistService {
  
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  
  getChequeos(t : string) {
    
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + t 
    });

    return this.http.get(`${this.API_URI}/chequeo`, { headers: httpHeaders });
  }

  getChequeo(id: string) {
    return this.http.get(`${this.API_URI}/Usuarios/${id}`);
  }

  saveChequeo(chequeo: CheckList1, t: string) {

    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + t 
    });

    return this.http.post(`${this.API_URI}/chequeo`, chequeo, { headers: httpHeaders });
  }




}


