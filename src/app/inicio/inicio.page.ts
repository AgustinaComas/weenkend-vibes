import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  Evento: Array<any> = [
    { 
      Id: 0,
      Nombre: "Disciplina tour Lali", 
      Descripcion: "Show imperdible",
      Imagen: "lalitour.img"
    },
    { 
      Id: 1,
      Nombre: "Otto jueves", 
      Descripcion: 'La fija del jueves',
      Imagen: "otto.img"
     },
     { 
      Id: 2,
      Nombre: "Minions: nace un villano", 
      Descripcion: 'Distruta de esta pelicula en familia en el cine',
      Imagen: "minions.img"
     },
     
     
  ]
  
 
  constructor(private router:Router) {  }

  goToPage(pageName:string):void{
    this.router.navigate(['${pageName}']);
  }
 Eventos: any[] = [];
 searchedEvento: any;

  searchEvents(event){
    const text = event.target.value;
    this.searchedEvento = this.Evento;
    if(text && text.trim() !=''){
      this.searchedEvento = this.searchedEvento.filter((Eventos: any)=>{
        return (Eventos.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
  ngOnInit() {
    this.searchedEvento = this.Evento;
    
  }

}
