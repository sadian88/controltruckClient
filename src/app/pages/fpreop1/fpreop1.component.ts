import { Component, OnInit, HostListener } from '@angular/core';
import { CheckList1 } from 'src/app/models/checkList1';
import {  ChequeolistService } from 'src/app/services/chequeolist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-fpreop1',
  templateUrl: './fpreop1.component.html',
  styleUrls: ['./fpreop1.component.scss']
})
export class FPreop1Component implements OnInit {
  public fecha_actual;
  public user: any;
  public persona: string;
  public token: string;
  public result: boolean;
  private readonly notifier: NotifierService;
  

  constructor(private chequeoServices: ChequeolistService, private router: Router, private activatedRoute: ActivatedRoute, notifierService: NotifierService) {   
    this.fecha_actual = new Date();
    this.notifier = notifierService;
  }
   
   chq : CheckList1 = {
    Id: 0,
    usuario_id:0,
    Fecha: new Date(),
    Vehiculo: '',
    Realizado_por: '',
    L_alta_baja: '',
    L_intermitentes: '',
    L_Marcha_atras: '',
    L_freno: '',
    Che_general_motor: '',
    Sistema_pedal_freno: '',
    Sistema_direccion: '',
    N_combustible: '',
    N_aceite: '',
    N_liquido_frenos: '',
    N_liquido_hidraulico: '',
    N_dispositivo_agua: '',
    Latoneria_pintura: '',
    Equipo_refrijeracion: '',
    bocina:'',
    Cinturon_seguridad: '',
    Tablero_control: '',
    Espejos_retrovisores: '',
    Estado_puertas: '',
    Orden_aseo: '',
    Soat_tarjeta: '',
    Ll_delanteras: '',
    Ll_traseras: '',
    Ll_repuesto: '',
    Aprete_ruedas: '',
    K_botiquin: '',
    K_extintor: '',
    K_herramientas: '',
    Otro: ''
};


  ngOnInit() {
    console.log(this.fecha_actual);
    this.user = JSON.parse(localStorage.getItem('usuario'));
    this.persona = localStorage.getItem('nombre');
    this.token = localStorage.getItem('token');

  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
  saveChequeo(){
   
    this.chq.usuario_id=this.user[0].Id;
    this.chq.Realizado_por=this.persona

    this.chequeoServices.saveChequeo(this.chq, this.token )
    .subscribe(
      res => {
        if(res != ''){             
          console.log(res);
          this.chq = {};
          this.result = true;
          this.gotoTop();
            this.notifier.notify(
              "success",
              "Listado guardado !"
            );
        }
        else{     
          this.result = false;
        }

      },
      err => console.log(err)
    )  
  }
  


}
