import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/personas';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {
    
   }

  // getPersona(id: number) {
  //   return this.http.get(`${this.API_URI}/personas/${id}`);
  // }

  getPersona(id: number, t:string) {

    const httpHeaders = new HttpHeaders ({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + t 
       });
    
    return this.http.get<Persona>(this.API_URI + '/personas', { headers: httpHeaders });
  }
}
