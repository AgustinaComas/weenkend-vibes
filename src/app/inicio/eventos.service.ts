import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonItem } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  /*private Evento:evento[] = [
    { 
      id: '1',
      Nombre: "Disciplina tour Lali", 
      Descripcion: "LALI, la artista pop más importante de Argentina, anuncia su nuevo tour “Disciplina” en el Estadio Luna Park, el próximo 31 de julio.",
      Imagen: "lalitour.img",
      favorito: false,
      Precio: "4.500"

    },
    { 
      id: '2',
      Nombre: "Otto jueves", 
      Descripcion: 'El mejor boliche de los jueves en la noche rosarina. Boliche/Pub. #LaFijaDeLosJueves. Rosario, Argentina. ',
      Imagen: "otto.img",
      favorito: false,
      Precio: "1.200"
     },
     { 
      id: '3',
      Nombre: "Minions: nace un villano", 
      Descripcion: 'Distruta de esta pelicula en familia en el cine,Título original: “Minions; Nace un villano”; Estreno: 30.09.2022; Clasificación: Apta para todo público. ',
      Imagen: "minions.img",
      favorito: false,
      Precio: "500"
     },
     { 
      id: '4',
      Nombre: "Fiesta de halloween , La chueka", 
      Descripcion: 'Este sabado 29 de octubre a la fiesta de DISFRACES de halloween mas grande de Rosario en uno de los puntos mas lindos de la ciudad',
      Imagen: "Halloween.img",
      favorito: false,
      Precio: "2.000"

     },
     { 
      id: '5',
      Nombre: "Bar El Cairo", 
      Descripcion: 'El catalán, en el inicio de su última gira, llegó para nominar Santa Fe y Sarmiento con su nombre y el de su amigo, el Negro',
      Imagen: "ElCairo.img",
      favorito: false,
      Precio: "1.000"
     },
     {
      id: '6',
      Nombre: "Concierto Abel Pintos", 
      Descripcion: 'El artista, uno de los más importantes de la escena argentina del último tiempo, llegará hoy al Autódromo rosarino con su gira "Abel en Concierto", en un recital que se destacará en la ciudad por medir y reducir su impacto a través de acciones ambientales',
      Imagen: "Abel.img",
      favorito: false,
      Precio: "3.000"
     },
     { 
      id: '7',
      Nombre: "Start up weekend", 
      Descripcion: 'Startup Week Rosario es una semana de conversatorios, workshops, talleres y espacios de networking. Del 31/10 al 3/11 animate a convertirte en experto en Economía circular y colaborativa, Emprender, Construir comunidad y Las tecnologías que se vienen',
      Imagen: "Startup.img",
      favorito: false,
      Precio: "4.000"
     },
    { 
      id: '8',
      Nombre: "YSY A concierto", 
      Descripcion: 'YSY A EN ROSARIO PRESENTA EL HOMBRE SISMO',
      Imagen: "ysya.img",
      favorito: false,
      Precio: "5.600"
     },
     { 
      id: '9',
      Nombre: "Concierto de TINI", 
      Descripcion: 'TINI, TOUR 2022 HIPODROMO MUNICIPAL PARQUE INDEPENDENCIA, ROSARIO',
      Imagen: "ConciertoTINI.img",
      favorito: false,
      Precio: "5.500"
     },
     { 
      id: '10',
      Nombre: "Concierto Axel", 
      Descripcion: 'El cantautor argentino presentará su Tour 2023, que repasará sus grandes éxitos e introducirá a su público con las novedades musicales del artista',
      Imagen: "axel.img",
      favorito: false,
      Precio: "8.000"
     },
     { 
      id: '11',
      Nombre: "Avatar: el camino del agua", 
      Descripcion: 'Esta pelicula narra la historia de la familia Sully (Jake, Neytiri y sus hijos), el peligro que los persigue, los esfuerzos que hacen para mantenerse a salvo, las batallas que libran para seguir con vida, y las tragedias que sobrellevan.',
      Imagen: "avatar.img",
      favorito: false,
      Precio: "900"
     },
     { 
      id: '12',
      Nombre: "Festival de navidad", 
      Descripcion: 'Un festival para pasar la navidad con amigos de pura fiesta. 2 escenarios confirmados con increíbles djs.',
      Imagen: "navidad.img",
      favorito: false,
      Precio: "1800"
     },

 ]*/
  
  constructor(private http: HttpClient) { }
  
  async getEventos(): Promise<evento[]>
  { return this.http.get("http://localhost:8080/evento")
   .toPromise()
   .then(resp=>{
        const evt = resp as evento[]; return Promise.resolve(evt);
   })
   .catch(err => {throw err}); }

  async getEventosInfo(eventoID:string): Promise<evento[]>
  { return this.http.get("http://localhost:8080/evento/" + eventoID)
   .toPromise()
   .then(resp=>{
        const evt = resp as evento[]; return Promise.resolve(evt);
   })
   .catch(err => {throw err}); }

 /* addEventos(Nombre: string, Descripcion: string, Imagen: string, Precio:string ){
this.Evento.push(
  {
    id: this.Evento.length + 1 + "",
    Nombre: Nombre,
    Descripcion: Descripcion,
    Imagen: Imagen,
    Precio: Precio,
  }
)
  }

  getEventosById(eventoID: string){
    return{
      ...this.Evento.find(p => {
        return p.id == eventoID
      })
    }
  }*/

  toggleFavoritos(id:string){

  }

  eventocarrito=undefined;
  seteventocarrito(evento){
this.eventocarrito = evento
  }
  geteventocarrito(){
    return this.eventocarrito
  }


}

export interface evento{
  id:string
  nombre:string
  descripcion:string
  imagen:string
  favorito?:boolean
  precio:string
}

