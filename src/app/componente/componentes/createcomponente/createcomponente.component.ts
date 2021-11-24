import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponenteService } from 'src/app/service/componente.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ComponenteI } from 'src/app/model/componente';

@Component({
  selector: 'app-createcomponente',
  templateUrl: './createcomponente.component.html',
  styleUrls: ['./createcomponente.component.css']
})
export class CreatecomponenteComponent implements OnInit {

  public formulario : FormGroup = this.formBuilder.group({
    nombre: ['',Validators.required],
    especificacion: ['',Validators.required],
    cantidad: ['',Validators.required],
    precio: ['',Validators.required]
  })

  constructor(
    private componenteService: ComponenteService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar ,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const formvalue: ComponenteI = this.formulario.value
    this.componenteService.create(formvalue).subscribe(
      ()=> {
        this.snackBar.open(
          'Componente creado con exito!!', 'yeah', {
            duration: 5000
          }
        );
        this.router.navigateByUrl('/componentes')
      },
      err => {
       this.snackBar.open(
         'El componente no pudo ser creado !!', 'lo siento', {
           duration: 5000
         }
       )
      }
    )
    
  }

}
