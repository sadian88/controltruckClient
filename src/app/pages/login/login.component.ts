import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor( private usuarioServices: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}
  
  usuario: Usuario = {
    id:0,
    email:'',
    password:'',
  };

  mlogin: Login;
 
  result:boolean;
  token:string;

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(){
      this.usuarioServices.auth(this.usuario)
        .subscribe(
          res => {
          
            if(res.token != ''){             
              this.mlogin = res;
              localStorage.setItem('token', this.mlogin.token);
              localStorage.setItem('usuario', JSON.stringify(this.mlogin.usuario));
              this.router.navigateByUrl('dashboard');             
            }
            else{     
              this.result = true;
            }

          },
          err => console.log(err)
        )        
      
  }  

}

