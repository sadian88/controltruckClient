import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-green', class: '' },
  { path: '/fpreop1', title: 'Carga check list 1',  icon:'ni-archive-2 text-blue', class: '' },
  { path: '/tables', title: 'Historial checklist',  icon:'ni-delivery-fast text-red', class: '' },
  { path: '/repuestos', title: 'Carga repuestos',  icon:'ni-cart text-blue', class: '' },
  { path: '/tables', title: 'Historial repuestos',  icon:'ni-bag-17 text-red', class: '' },
  { path: '/mantenimiento', title: 'Carga mantenimientos',  icon:'ni-settings text-blue', class: '' },
  { path: '/tables', title: 'Historial mantenimiento',  icon:'ni-sound-wave text-red', class: '' },

        // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' }
        
        // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
        // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];      



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token') != undefined)
    {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
    else{
      this.router.navigateByUrl('login');
    }
    
  }
}
