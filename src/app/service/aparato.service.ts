import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { aparatoI } from '../model/aparato';

@Injectable({
  providedIn: 'root'
})
export class AparatoService {
api_url = 'http://localhost:8000';
base_path = `${this.api_url}/aparato`
  
constructor(
    private http: HttpClient
  ) { }

getAll():Observable<aparatoI[]>{
  return this.http.get<aparatoI[]>(this.base_path)
}
create(data:aparatoI): Observable<aparatoI>{
  return this.http.post<aparatoI>(this.base_path,data)
}
}