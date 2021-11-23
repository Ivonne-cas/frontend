import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fabricanteI } from 'src/app/model/fabricante';
import { FabricanteService } from 'src/app/service/fabricante.service';
@Component({
  selector: 'app-show-fabricante',
  templateUrl: './show-fabricante.component.html',
  styleUrls: ['./show-fabricante.component.css']
})
export class ShowFabricanteComponent implements OnInit {
  public fabricante:fabricanteI[]=[]
  public displayedColumns: string[]=["id","nombre","domicilio","status"]
  constructor(
    private fabricanteservice: FabricanteService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrar()
  }
  mostrar() {
    this.fabricanteservice.getFabricante()
    .subscribe({
      next:(data)=>{
        this.fabricante=data
        console.log (data)
      }
    })
  }

}
