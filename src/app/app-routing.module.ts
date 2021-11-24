import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaparatoComponent } from './componente/aparato/createaparato/createaparato.component';
import { ShowaparatoComponent } from './componente/aparato/showaparato/showaparato.component';
import { CreatecomponenteComponent } from './componente/componentes/createcomponente/createcomponente.component';
import { ShowcomponenteComponent } from './componente/componentes/showcomponente/showcomponente.component';
import { CreateFabricanteComponent } from './componente/fabricante/create-fabricante/create-fabricante.component';
import { ShowFabricanteComponent } from './componente/fabricante/show-fabricante/show-fabricante.component';
import { CreatetipoElectrodomesticosComponent } from './componente/tipo_electrodomesticos/createtipo-electrodomesticos/createtipo-electrodomesticos.component';
import { ShowtipoelectrodomesticosComponent } from './componente/tipo_electrodomesticos/showtipoelectrodomesticos/showtipoelectrodomesticos.component';

const routes: Routes = [
  {
    path: "fabricante",
    component:ShowFabricanteComponent
  },
  {
    path: "crear_fabricante",
    component:CreateFabricanteComponent
  },
  {
    path: "aparato",
    component:ShowaparatoComponent
  },
  {
    path: "crear_aparato",
    component:CreateaparatoComponent
  },
  {
    path: "crear_tipoElectrodomesticos",
    component:CreatetipoElectrodomesticosComponent
  },
  {
    path: "Tipo_electrodomesticos",
    component:ShowtipoelectrodomesticosComponent
  }, 

  {
    path: "componentes",
    component:ShowcomponenteComponent
  },

  {
    path: "crearcomponentes",
    component: CreatecomponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
