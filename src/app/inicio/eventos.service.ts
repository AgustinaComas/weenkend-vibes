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
