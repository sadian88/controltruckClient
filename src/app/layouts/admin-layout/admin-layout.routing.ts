import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { FPreop1Component } from '../../pages/fpreop1/fpreop1.component';
import { ComprarepuestoComponent } from '../../pages/comprarepuesto/comprarepuesto.component';
import { MantenimientoComponent } from '../../pages/mantenimiento/mantenimiento.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'fpreop1',        component: FPreop1Component },
    { path: 'repuestos',      component: ComprarepuestoComponent },
    { path: 'mantenimiento',  component: MantenimientoComponent },
    { path: 'maps',           component: MapsComponent }
];
