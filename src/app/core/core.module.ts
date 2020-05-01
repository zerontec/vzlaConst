import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';
import { ServCarpComponent } from './components/services/serv-carp/serv-carp.component';
import { ServBasamentComponent } from './components/services/serv-basament/serv-basament.component';
import { ServKitchenComponent } from './components/services/serv-kitchen/serv-kitchen.component';
import { SUB_RUTAS } from '../sub.rutas';

/* const routes: Routes = [
  {path: 'services', component:  ServicesComponent,
  children:[
    {path: 'Basement-Remodeling', component: ServBasamentComponent},
    {path: 'Carpentry', component: ServCarpComponent},
    {path: 'Kitchen-Remodeling', component: ServKitchenComponent},
    ]
},];
 */

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
     ProjectsComponent,
     ContactComponent,
     ServCarpComponent,
     ServBasamentComponent,
     ServKitchenComponent],
  imports: [
    CommonModule,
    SharedModule,
    MDBBootstrapModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SUB_RUTAS

    // RouterModule.forChild(routes)
  ],


  exports:[RouterModule],
})
export class CoreModule { }
