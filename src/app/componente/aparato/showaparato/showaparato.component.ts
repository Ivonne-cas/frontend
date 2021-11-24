import { Component, OnInit } from '@angular/core';
import { aparatoI } from 'src/app/model/aparato';
import { AparatoService } from 'src/app/service/aparato.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showaparato',
  templateUrl: './showaparato.component.html',
  styleUrls: ['./showaparato.component.css']
})
export class ShowaparatoComponent implements OnInit {

  public aparato:aparatoI[]=[]
  public displayedColumns: string[]=["id","descripcion","status"]
  
  constructor(
    private aparatoservice: AparatoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrar()
  }
  mostrar() {
    this.aparatoservice.getAparato()
    .subscribe({
      next:(data)=>{
        this.aparato=data
        console.log (data)
      }
    })
  }

}
