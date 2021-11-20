import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 url = 'http://localhost:4000/persona/';


  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.url);
  }

}
