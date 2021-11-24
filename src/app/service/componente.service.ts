import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponenteI } from '../model/componente';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  api_url='http://localhost:8000'
  base_path=`${this.api_url}/componentes`
  constructor(
    private http: HttpClient
  ) {   
  }
  getFabricante():Observable<ComponenteI[]>{
    return this.http.get <ComponenteI[]>(this.base_path)
  }
  create(data: ComponenteI ): Observable<ComponenteI>{
    return this.http.post<ComponenteI>(this.base_path, data)
  }
}
