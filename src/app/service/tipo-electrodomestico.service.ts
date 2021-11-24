import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipo_electrodomesticosI } from '../model/tipo_electrodomesticos';

@Injectable({
  providedIn: 'root'
})
export class TipoElectrodomesticoService {
  api_url = 'http://localhost:8000';
  base_path = `${this.api_url}/tipo_electrodomesticos`
  constructor(
    private http: HttpClient
  ) { }
  getAll():Observable<tipo_electrodomesticosI[]>{
    return this.http.get<tipo_electrodomesticosI[]>(this.base_path)
  }
  create(data:tipo_electrodomesticosI): Observable<tipo_electrodomesticosI>{
    return this.http.post<tipo_electrodomesticosI>(this.base_path,data)
  }
}
