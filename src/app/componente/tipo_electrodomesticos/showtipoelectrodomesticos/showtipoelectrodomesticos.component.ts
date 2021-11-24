import { Component, OnInit } from '@angular/core';
import { tipo_electrodomesticosI } from 'src/app/model/tipo_electrodomesticos';
import { TipoElectrodomesticoService } from 'src/app/service/tipo-electrodomestico.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showtipoelectrodomesticos',
  templateUrl: './showtipoelectrodomesticos.component.html',
  styleUrls: ['./showtipoelectrodomesticos.component.css']
})
export class ShowtipoelectrodomesticosComponent implements OnInit {
  public tipo_electrodomesticos:tipo_electrodomesticosI[]=[]
  public displayedColumns: string[]=["id","nombre","caracteristicas","status"]
  
  constructor(
    private tipoelectrodomesticoservice: TipoElectrodomesticoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrar()
  }
  mostrar() {
    this.tipoelectrodomesticoservice.getTipoElectrodomesticos()
    .subscribe({
      next:(data)=>{
        this.tipo_electrodomesticos=data
        console.log (data)
      }
    })
  }

}
