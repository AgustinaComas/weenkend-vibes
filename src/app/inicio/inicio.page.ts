import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosPageModule } from './eventos/eventos.module';
import { EventosPage } from './eventos/eventos.page';
import { EventosService } from './eventos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})



export class InicioPage implements OnInit {
  private Evento = []

  constructor(private Servicio: EventosService) {  }

  
  ngOnInit() {
    this.Evento = this.Servicio.getEventos()
    
  }


}
