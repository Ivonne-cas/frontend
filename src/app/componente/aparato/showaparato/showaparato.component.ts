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

  constructor() { }

  ngOnInit(): void {
  }

}
