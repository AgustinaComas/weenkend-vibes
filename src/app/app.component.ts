import { Component } from '@angular/core';
import { EventosService } from './inicio/eventos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'angular-http-client'
  constructor(
    private EventoService
  ) {}

  ngOnInit (){
   
  }
}
