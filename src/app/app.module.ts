import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFabricanteComponent } from './componente/fabricante/create-fabricante/create-fabricante.component';
import { ShowFabricanteComponent } from './componente/fabricante/show-fabricante/show-fabricante.component';
import { NavComponent } from './componente/layauts/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FabricanteService } from './service/fabricante.service';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShowaparatoComponent } from './componente/aparato/showaparato/showaparato.component';
import { CreateaparatoComponent } from './componente/aparato/createaparato/createaparato.component';
import { CreatetipoElectrodomesticosComponent } from './componente/tipo_electrodomesticos/createtipo-electrodomesticos/createtipo-electrodomesticos.component';
import { ShowtipoelectrodomesticosComponent } from './componente/tipo_electrodomesticos/showtipoelectrodomesticos/showtipoelectrodomesticos.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateFabricanteComponent,
    ShowFabricanteComponent,
    NavComponent,
    ShowaparatoComponent,
    CreateaparatoComponent,
    CreatetipoElectrodomesticosComponent,
    ShowtipoelectrodomesticosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
    
  ],
  providers: [
    FabricanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
