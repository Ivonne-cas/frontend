import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoElectrodomesticoService } from 'src/app/service/tipo-electrodomestico.service'; 
import {MatSnackBar} from '@angular/material/snack-bar';
import { tipo_electrodomesticosI } from 'src/app/model/tipo_electrodomesticos';

@Component({
  selector: 'app-createtipo-electrodomesticos',
  templateUrl: './createtipo-electrodomesticos.component.html',
  styleUrls: ['./createtipo-electrodomesticos.component.css']
})
export class CreatetipoElectrodomesticosComponent implements OnInit {
  public formulario : FormGroup = this.formBuilder.group({
    nombre: ['',Validators.required],
    caracteristicas: ['',Validators.required]
  })
  constructor(
    private tipo_electrodomesticoservice: TipoElectrodomesticoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar ,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formvalue: tipo_electrodomesticosI = this.formulario.value
    this.tipo_electrodomesticoservice.create(formvalue).subscribe(
      ()=> {
        this.snackBar.open(
          'Tipo de electrodomésticos creado con exito!!', 'yeah', {
            duration: 5000
          }
        );
        this.router.navigateByUrl('/fabricante')
      },
      err => {
       this.snackBar.open(
         'Este Tipo de electrodomesticos no pudo ser creado !!', 'Lo sentimos', {
           duration: 5000
         }
       )
      }
    )
    
  }

}
