import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosPageModule } from './eventos/eventos.module';
import { EventosPage } from './eventos/eventos.page';
import { EventosService } from './eventos.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { evento } from './eventos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  private Evento = []
  items =[]
  eventos: evento[] = [];

constructor(private Service: EventosService, private http: HttpClient, private ActivatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.generateItems();
    this.getEventos();
  }

 getEventos(){
    this.Service.getEventos()
    .then(evt=> {
this.eventos = evt;
    })
 }


  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }


  OnFavoritos( id:string) {
    //const eventoEditar:evento= this.Evento.filter( evento => evento.id===id)[0]
this.Evento.forEach( evento => {if(evento.id===id  ) evento.favorito=!evento.favorito})
    console.log(id)
  }


}
