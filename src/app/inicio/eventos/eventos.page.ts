import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../eventos.service';
import { evento } from '../eventos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  
  constructor(private Servicio: EventosService, private ActivatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

private datos = {}
id: string = '';
eventos: evento[];

  ngOnInit() {
  this.ActivatedRoute.paramMap.subscribe(p => {
    //console.log(p.get('EventoID'))
    /*this.datos = this.Servicio.getEventosById( p.get('EventoID'))
    console.log()*/
  })
  this.Servicio.getEventos()
  .then(evt=> {
    this.eventos = evt;
  })
  }


  agregaralcarrito(){
    this.Servicio.seteventocarrito( this.datos)
    this.router.navigate(['/comprar'])
  }
 
    }

