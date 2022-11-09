import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosPageModule } from './eventos/eventos.module';
import { EventosPage } from './eventos/eventos.page';
import { evento, EventosService } from './eventos.service';


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
 
  OnFavoritos( id:string) {
    //const eventoEditar:evento= this.Evento.filter( evento => evento.id===id)[0]
this.Evento.forEach( evento => {if(evento.id===id  ) evento.favorito=!evento.favorito})

    console.log(id)
  }


}
