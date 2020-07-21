import { RouterModule, Routes} from '@angular/router';
import { ServicesComponent } from './core/components/services/services.component';
import { ServBasamentComponent } from './core/components/services/serv-basament/serv-basament.component';
import { ServCarpComponent } from './core/components/services/serv-carp/serv-carp.component';
import { ServKitchenComponent } from './core/components/services/serv-kitchen/serv-kitchen.component';
import { ServRemodelingComponent } from './core/components/services/serv-remodeling/serv-remodeling.component';
import { ServCpermitsComponent } from './core/components/services/serv-cpermits/serv-cpermits.component';
import { ServPreviewComponent } from './core/components/services/serv-preview/serv-preview.component';
import { AdminProjectsComponent } from './admin/components/admin-projects/admin-projects.component';
import { FormuProyectComponent } from './admin/components/project/formu-proyect/formu-proyect.component';



const subroutes: Routes = [
    {path: 'services', component:  ServicesComponent,
    children: [
      {path: 'Basement-Remodeling', component: ServBasamentComponent},
      {path: 'Carpentry', component: ServCarpComponent},
      {path: 'Kitchen-Remodeling', component: ServKitchenComponent},
      {path: 'Remodeling-Project', component: ServRemodelingComponent},
      {path: 'Construction-Permits', component: ServCpermitsComponent},
      {path: 'Project-Preview', component: ServPreviewComponent},
      ],

  }

];


export const SUB_RUTAS = RouterModule.forChild(subroutes, );
