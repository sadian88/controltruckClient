import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fpreop1',
  templateUrl: './fpreop1.component.html',
  styleUrls: ['./fpreop1.component.scss']
})
export class FPreop1Component implements OnInit {
  public fecha_actual;
  constructor() {
    this.fecha_actual = new Date();
   }

  ngOnInit() {
    console.log(this.fecha_actual);
  }

}
