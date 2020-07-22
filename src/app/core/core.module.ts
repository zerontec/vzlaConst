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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from '../transloco-root.module';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
import { ServCarpComponent } from './components/services/serv-carp/serv-carp.component';
import { ServBasamentComponent } from './components/services/serv-basament/serv-basament.component';
import { ServKitchenComponent } from './components/services/serv-kitchen/serv-kitchen.component';
import { SUB_RUTAS } from '../sub.rutas';
import { ServRemodelingComponent } from './components/services/serv-remodeling/serv-remodeling.component';
import { ServCpermitsComponent } from './components/services/serv-cpermits/serv-cpermits.component';
import { ServPreviewComponent } from './components/services/serv-preview/serv-preview.component';
import { ServProposalComponent } from './components/services/serv-proposal/serv-proposal.component';
import { MoreServicesComponent } from './components/more-services/more-services.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    ServCarpComponent,
    ServBasamentComponent,
    ServKitchenComponent,
    ServRemodelingComponent,
    ServCpermitsComponent,
    ServPreviewComponent,
    ServProposalComponent,
    MoreServicesComponent,
    ProjectDetailComponent,
    GalleryComponent],
  imports: [
    CommonModule,
    SharedModule,
    MDBBootstrapModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    TranslocoRootModule,
    SUB_RUTAS,

  ],


  exports: [RouterModule],
})
export class CoreModule { }
