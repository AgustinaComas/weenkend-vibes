import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../eventos.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  constructor(private Servicio: EventosService, private activaedRoute: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
  this.activaedRoute.paramMap.subscribe( p => {
    console.log(p)
  })
 
  }
  async pago() {
    const alert = await this.alertController.create({
      header: 'Ingresa tus datos',
      buttons: ['Realiza el pago'],
      inputs: [
        {
          placeholder: 'Nombre del titular',
        },
        {
          placeholder: 'Apellido ',
        },
        {
          type: 'number',
          placeholder: 'Numero de tarjeta',
        },
        {
          type: 'number',
          placeholder: 'Codigo de tarjeta',
        },
      ],
    });

    await alert.present();
  }
}
