import { Component, OnInit } from '@angular/core';
import { CheckList1 } from 'src/app/models/checkList1';
import {  ChequeolistService } from 'src/app/services/chequeolist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {

  public fecha_actual;
  public user: any;
  public persona: string;
  public token: string;
  public result: boolean;
  private readonly notifier: NotifierService;

  constructor(private chequeoServices: ChequeolistService, private router: Router, private activatedRoute: ActivatedRoute, notifierService: NotifierService) {
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
    this.user = JSON.parse(localStorage.getItem('usuario'));
    this.persona = localStorage.getItem('nombre');
    this.token = localStorage.getItem('token');
    this.cargarTabla();
  }

  cargarTabla(){
    this.chequeoServices.getChequeos(this.token )
    .subscribe(
      res => {
        if(res != ''){             
          this.chq= res;
          this.result = true;
          console.log(this.chq);
        }
        else{     
          this.result = false;
        }

      },
      err => console.log(err)
    )  
  }

  descargaexcel(){
    this.notifier.notify(
      "success",
      "Descargando el excel !"
    );
  }
  
}
