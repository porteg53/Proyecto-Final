import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  selected = 'Listar Productos';
  selected1 = 'Reporte';
  selected2 = 'Usuarios';
  constructor() { }

  ngOnInit(): void {
  }

}
