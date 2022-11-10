import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private Evento:evento[] = [
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
      Precio: "$4.500"
     },
     { 
      id: '3',
      Nombre: "Minions: nace un villano", 
      Descripcion: 'Distruta de esta pelicula en familia en el cine,Título original: “Minions; Nace un villano”; Estreno: 30.09.2022; Clasificación: Apta para todo público. ',
      Imagen: "minions.img",
      favorito: false,
      Precio: "$4.500"
     },
     { 
      id: '4',
      Nombre: "Fiesta de halloween , La chueka", 
      Descripcion: 'Este sabado 29 de octubre a la fiesta de DISFRACES de halloween mas grande de Rosario en uno de los puntos mas lindos de la ciudad',
      Imagen: "Halloween.img",
      favorito: false,
      Precio: "$4.500"

     },
     { 
      id: '5',
      Nombre: "El bar El Cairo ahora queda en Serrat y Fontanarrosa", 
      Descripcion: 'El catalán, en el inicio de su última gira, llegó para nominar Santa Fe y Sarmiento con su nombre y el de su amigo, el Negro',
      Imagen: "ElCairo.img",
      favorito: false,
      Precio: "$4.500"
     },
     {
      id: '6',
      Nombre: "Concierto Abel Pintos", 
      Descripcion: 'El artista, uno de los más importantes de la escena argentina del último tiempo, llegará hoy al Autódromo rosarino con su gira "Abel en Concierto", en un recital que se destacará en la ciudad por medir y reducir su impacto a través de acciones ambientales',
      Imagen: "Abel.img",
      favorito: false,
      Precio: "$4.500"
     },
     { 
      id: '7',
      Nombre: "Start up weekend", 
      Descripcion: 'Startup Week Rosario es una semana de conversatorios, workshops, talleres y espacios de networking. Del 31/10 al 3/11 animate a convertirte en experto en Economía circular y colaborativa, Emprender, Construir comunidad y Las tecnologías que se vienen',
      Imagen: "Startup.img",
      favorito: false,
      Precio: "$4.500"
     },
    { 
      id: '8',
      Nombre: "Concierto de TINI", 
      Descripcion: 'TINI, TOUR 2022 HIPODROMO MUNICIPAL PARQUE INDEPENDENCIA, ROSARIO',
      Imagen: "ConciertoTINI.img",
      favorito: false,
      Precio: "$4.500"
     },

  ]

  constructor() { }

  getEventos(){
    return [...this.Evento]
  }

  addEventos(Nombre: string, Descripcion: string, Imagen: string, Precio:string ){
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
  }

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
  Nombre:string
  Descripcion:string
  Imagen:string
  favorito?:boolean
  Precio:string
}