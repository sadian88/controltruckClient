import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private usuarioServices: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  
  usuario: Usuario = {
    id: 0,
    email: '',
    password: '',
    image: ''
  };

  result:boolean;

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(){
      this.usuarioServices.auth(this.usuario)
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.result = true;
          },
          err => console.log(err)
        )

        console.log(this.usuario);
        
    }
  

}
