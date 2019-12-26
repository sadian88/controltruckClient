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
  constructor( private usuarioServices: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {}

  
  usuario: Usuario = {
    id: 0,
    email: '',
    password: '',
    image: ''
  };

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
              
              localStorage.setItem('token', res.token);
              localStorage.setItem('usuario', JSON.stringify(res.usuario));
              this.router.navigateByUrl('dashboard');
              this.usuario = res;
              
            }
            else{     
              console.log("entra en no");
              this.result = true;
            }

          },
          err => console.log(err)
        )        
      
    }  

}
