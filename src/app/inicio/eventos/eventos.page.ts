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

private datos: evento = {
  id: '',
  nombre: '',
  descripcion: '',
  imagen: 'imagen.png',
  precio: ''
}
id: string = '';
eventos: evento[];

  ngOnInit() {
     const sub = this.ActivatedRoute.params.subscribe(params =>{
    this.Servicio.getEventosInfo(params["EventoID"]).then((resp:evento)=> this.datos = resp)
  })
  }

  agregaralcarrito(){
    this.Servicio.seteventocarrito(this.datos)
    this.router.navigate(['/comprar'])
  }
 
    }

