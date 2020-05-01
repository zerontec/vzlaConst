import { RouterModule, Routes} from '@angular/router';
import { ServicesComponent } from './core/components/services/services.component';
import { ServBasamentComponent } from './core/components/services/serv-basament/serv-basament.component';
import { ServCarpComponent } from './core/components/services/serv-carp/serv-carp.component';
import { ServKitchenComponent } from './core/components/services/serv-kitchen/serv-kitchen.component';



const subroutes: Routes = [
    {path: 'services', component:  ServicesComponent,
    children: [
      {path: 'Basement-Remodeling', component: ServBasamentComponent},
      {path: 'Carpentry', component: ServCarpComponent},
      {path: 'Kitchen-Remodeling', component: ServKitchenComponent},
      ]
  }, ];


export const SUB_RUTAS = RouterModule.forChild(subroutes, );
