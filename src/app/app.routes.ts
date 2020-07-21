import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { ServicesComponent } from './core/components/services/services.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { ServBasamentComponent } from './core/components/services/serv-basament/serv-basament.component';
import { ServCarpComponent } from './core/components/services/serv-carp/serv-carp.component';
import { ServKitchenComponent } from './core/components/services/serv-kitchen/serv-kitchen.component';
import { AdminProjectsComponent } from './admin/components/admin-projects/admin-projects.component';
import { FormuProyectComponent } from './admin/components/project/formu-proyect/formu-proyect.component';


const appRoutes: Routes = [


{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},

{path: 'about', component: AboutComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'contact', component:  ContactComponent},











]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

