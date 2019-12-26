import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import { Persona } from 'src/app/models/personas';
import { PersonaService } from 'src/app/services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public persona: Persona;
  public user:any;
  public token:string;
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor( private pService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    if(localStorage.getItem('token')!= undefined)
    {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('usuario'));
    }

  }


  public updateOptions() {
  }

}
