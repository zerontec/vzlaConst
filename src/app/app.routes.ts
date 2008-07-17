import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { LoginComponent } from './admin/components/login/login.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';

const appRoutes: Routes = [


{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},

{path: 'about', component: AboutComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'gallery', component:  GalleryComponent},
{path: 'contact', component:  ContactComponent},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegisterComponent},
{path: 'verification-email', component: SendEmailComponent, },












]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

