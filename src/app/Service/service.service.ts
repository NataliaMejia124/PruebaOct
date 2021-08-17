import { Injectable } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { Observable, throwError } from 'rxjs'; import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/usuario';

  getUsuario(): Observable<any>{
  return this.http.get<Usuario[]>(this.url,httpOptions);

  }
  createUser(usuario: Usuario){
    return this.http.post<Usuario>(this.url,usuario);

  }
  getUsuarioId(id: number){
    return this.http.get<Usuario>(this.url+"/"+id);
  }

  updateUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.url, usuario);
  }

  deleteUsuario(usuario: Usuario){
    return this.http.delete<Usuario>(this.url+"/"+usuario.id_usuario);
  }

}
