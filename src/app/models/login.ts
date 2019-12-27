import { Title } from '@angular/platform-browser';
import { Usuario } from './usuario';

export interface Login {
    usuario:Usuario
    token?:string,    
};