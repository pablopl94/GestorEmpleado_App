import { Routes } from '@angular/router';
import { FormEmpleadoComponent } from './pages/form-empleado/form-empleado.component';
import { ListEmpleadosComponent } from './pages/list-empleados/list-empleados.component';
import { DetailsEmpleadosComponent } from './pages/details-empleados/details-empleados.component';


export const routes: Routes = [
    {path:"",pathMatch:"full", redirectTo:'home' },
    {path:"home", component: ListEmpleadosComponent },
    {path:"empleado/:idEmpleado", component: DetailsEmpleadosComponent},
    {path:"newEmpleado", component: FormEmpleadoComponent},
    {path:"updateEmpleado/:idEmpleado", component: FormEmpleadoComponent},
    {path: "**", redirectTo: "home"}
];
