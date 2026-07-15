import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Builder {
    constructor(private http: HttpClient) { }
    headers: HttpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : 'bearer ' + localStorage.getItem('token')
    });
    uri = environment.url+'/pages/';
    
    
    contenido(body: any) {
      const url = this.uri + 'traer';
      return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
    }
}
