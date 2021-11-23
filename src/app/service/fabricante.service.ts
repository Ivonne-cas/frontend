import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {fabricanteI} from'../model/fabricante';
@Injectable({
  providedIn: 'root'
})
export class FabricanteService {
  api_url='http://localhost:8000'
  base_path=`${this.api_url}/fabricante`
  constructor(
    private http: HttpClient
  ) {   
  }
  getFabricante():Observable<fabricanteI[]>{
    return this,this.http.get <fabricanteI[]>(this.base_path)
  }
  create(data: fabricanteI ): Observable<fabricanteI>{
    return this.http.post<fabricanteI>(this.base_path, data)
  }
}
