import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFabricanteComponent } from './componente/fabricante/create-fabricante/create-fabricante.component';
import { ShowFabricanteComponent } from './componente/fabricante/show-fabricante/show-fabricante.component';

const routes: Routes = [
  {
    path: "fabricante",
    component:ShowFabricanteComponent
  },
  {
    path: "crear_fabricante",
    component:CreateFabricanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
