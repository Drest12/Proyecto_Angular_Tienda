import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeTab: number = 0; // Cambia el tipo a 'number'
}
