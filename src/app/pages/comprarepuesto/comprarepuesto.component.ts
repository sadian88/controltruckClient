import { Component, OnInit } from '@angular/core';
import { CheckList1 } from 'src/app/models/checkList1';

@Component({
  selector: 'app-comprarepuesto',
  templateUrl: './comprarepuesto.component.html',
  styleUrls: ['./comprarepuesto.component.scss']
})
export class ComprarepuestoComponent implements OnInit {

  public fecha_actual;

  constructor( ) {
    this.fecha_actual = new Date();
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
  }

}
