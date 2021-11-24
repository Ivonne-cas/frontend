import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AparatoService } from 'src/app/service/aparato.service'; 
import {MatSnackBar} from '@angular/material/snack-bar';
import { aparatoI } from 'src/app/model/aparato'; 

@Component({
  selector: 'app-createaparato',
  templateUrl: './createaparato.component.html',
  styleUrls: ['./createaparato.component.css']
})
export class CreateaparatoComponent implements OnInit {
  public formulario : FormGroup = this.formBuilder.group({
      descripcion: ['',Validators.required]
  })
  constructor(
    private aparatoservice: AparatoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar ,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const formvalue: aparatoI = this.formulario.value
    this.aparatoservice.create(formvalue).subscribe(
      ()=> {
        this.snackBar.open(
          'Aparato creado con exito!!', 'yeah', {
            duration: 5000
          }
        );
        this.router.navigateByUrl('/aparato')
      },
      err => {
       this.snackBar.open(
         'Este aparato no pudo ser creado !!', 'Lo sentimos', {
           duration: 5000
         }
       )
      }
    )
    
  }
}
