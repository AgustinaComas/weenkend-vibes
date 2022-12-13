import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  dates=['2022-07-31', '2022-07-20', '2022-12-24','2022-07-07', '2022-09-10', '2022-11-04', '2022-10-13', '2022-10-29', '2022-10-31', '2023-03-10', '2022-12-10', '2022-12-12'];

  constructor() { }

  ngOnInit() {
  }
  deshabilitarCalendario = (dateString: string) => this.dates.includes(dateString);
}
