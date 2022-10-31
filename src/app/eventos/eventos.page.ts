import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
  this.ar.params.subscribe (
    (route)=> console.log(route)
  )
  }
 

}
