import { Routes } from '@angular/router';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { MenuComponent } from './menu/menu.component';
import { autenticacionGuard } from './autenticacion.guard';
import { CalculoComponent } from './menu/calculo/calculo.component';

export const routes: Routes = [
    {path: "", redirectTo: "autenticacion", pathMatch: "full"},
    {path: "autenticacion", component: AutenticacionComponent},
    {path: "menu", component: MenuComponent, canActivate: [autenticacionGuard], 
        children:[
            {path: "calculo", component: CalculoComponent}
        ]}
];
