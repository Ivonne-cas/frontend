import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FabricanteService } from 'src/app/service/fabricante.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { fabricanteI } from 'src/app/model/fabricante';

@Component({
  selector: 'app-create-fabricante',
  templateUrl: './create-fabricante.component.html',
  styleUrls: ['./create-fabricante.component.css']
})
export class CreateFabricanteComponent implements OnInit {
  public formulario : FormGroup = this.formBuilder.group({
    nombre: ['',Validators.required],
    domicilio: ['',Validators.required],
    status: ['',Validators.required]
  })
  constructor(
    private fabricanteservice: FabricanteService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar ,
    private router: Router
  ) {
   }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const formvalue: fabricanteI = this.formulario.value
    this.fabricanteservice.create(formvalue).subscribe(
      ()=> {
        this.snackBar.open(
          'Fabricante creado con exito!!', 'yeah', {
            duration: 5000
          }
        );
        this.router.navigateByUrl('/fabricante')
      },
      err => {
       this.snackBar.open(
         'El Fabricante no pudo ser creado !!', 'lo siento', {
           duration: 5000
         }
       )
      }
    )
    
  }
}
