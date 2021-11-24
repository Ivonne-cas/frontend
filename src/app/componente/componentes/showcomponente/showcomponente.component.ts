import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponenteI } from 'src/app/model/componente';
import { ComponenteService } from 'src/app/service/componente.service';

@Component({
  selector: 'app-showcomponente',
  templateUrl: './showcomponente.component.html',
  styleUrls: ['./showcomponente.component.css']
})
export class ShowcomponenteComponent implements OnInit {
  public componentes:ComponenteI[]=[]
  public displayedColumns: string[]=["id","especificacion","cantidad","precio"]
  
  constructor(
    private componenteService: ComponenteService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrar()
  }
  mostrar() {
    this.componenteService.getFabricante()
    .subscribe({
      next:(data)=>{
        this.componentes=data
        console.log (data)
      }
    })
  }
}
