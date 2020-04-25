import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { ServicesComponent } from './core/components/services/services.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { ContactComponent } from './core/components/contact/contact.component';


const appRoutes: Routes = [


{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},

{path: 'about', component: AboutComponent},
{path: 'services', component: ServicesComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'contact', component: ContactComponent},



];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);

