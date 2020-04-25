import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent, ProjectsComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    MDBBootstrapModule
  ]
})
export class CoreModule { }
