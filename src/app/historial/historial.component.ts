import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historialList: Historial[];

  constructor(private service: HistorialService) { }

  ngOnInit() {
    this.getHistorialList();
  }

  getHistorialList(): void {
    this.service.getHistorial()
    .subscribe(data => {
      this.historialList=data;
    });
  }
}
