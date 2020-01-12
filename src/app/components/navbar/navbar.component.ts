import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/personas';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  public persona: Persona;
  public nombreCompleto: string;
  public user:any;
  public token:string;
  
  constructor(private pService: PersonaService, location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
    this.persona = {
      Nombre:'',
      Apellido:''
    }
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    if(localStorage.getItem('token')!= undefined)
    {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('usuario'));
      this.getPersonaByUser(this.user[0].Id);
      this.getVehiculosList();
     
    }
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  public getPersonaByUser(Id:number){

    this.pService.getPersona(Id, this.token)
    .subscribe(
      res => {
        this.persona=res[0];
        localStorage.setItem('nombre',this.persona.Nombre + ' ' + this.persona.Apellido);
      },
      err => console.log(err)
    )           
}


public getVehiculosList(){

  this.pService.getVehiculos(this.token)
  .subscribe(
    res => {
      localStorage.setItem('vehiculos',JSON.stringify(res));
    },
    err => console.log(err)
  )           
}

logout(){
  localStorage.clear();
  this.location.go('/login');
}

}
