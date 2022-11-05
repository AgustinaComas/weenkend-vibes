import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private Evento = [
    { 
      id: '1',
      Nombre: "Disciplina tour Lali", 
      Descripcion: "Show imperdible",
      Imagen: "lalitour.img"
    },
    { 
      id: '2',
      Nombre: "Otto jueves", 
      Descripcion: 'La fija del jueves',
      Imagen: "otto.img"
     },
     { 
      id: '3',
      Nombre: "Minions: nace un villano", 
      Descripcion: 'Distruta de esta pelicula en familia en el cine',
      Imagen: "minions.img"
     },
     { 
      id: '6',
      Nombre: "Concierto Abel Pintos", 
      Descripcion: 'El artista, uno de los más importantes de la escena argentina del último tiempo, llegará hoy al Autódromo rosarino con su gira "Abel en Concierto", en un recital que se destacará en la ciudad por medir y reducir su impacto a través de acciones ambientales.',
      Imagen: "Abel.img"
     },
     { 
      id: '7',
      Nombre: "Start up weekend", 
      Descripcion: 'Startup Week Rosario es una semana de conversatorios, workshops, talleres y espacios de networking. Del 31/10 al 3/11 animate a convertirte en experto en Economía circular y colaborativa, Emprender, Construir comunidad y Las tecnologías que se vienen',
      Imagen: "Startup.img"
     },


  ]

  constructor() { }

  getEventos(){
    return [...this.Evento]
  }

  addEventos(Nombre: string, Descripcion: string,Imagen: string ){
this.Evento.push(
  {
    id: this.Evento.length + 1 + "",
    Nombre: Nombre,
    Descripcion: Descripcion,
    Imagen: Imagen
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
}
