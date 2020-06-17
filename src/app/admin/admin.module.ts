import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormuProyectComponent } from './components/formu-proyect/formu-proyect.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';


import { ListProjectComponent } from './components/list-project/list-project.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';


@NgModule({


declarations:[
FormuProyectComponent,
AdminProjectsComponent,


ListProjectComponent,
ProjectComponent,
EditProjectComponent,
DetailProjectComponent ],

imports: [
FormsModule,
ReactiveFormsModule,
SharedModule,
RouterModule.forChild([
  { path:   'admin/', component:FormuProyectComponent,  },
    { path: 'admin/project/new', component:FormuProyectComponent,  },
    { path: 'admin/project/:id', component: FormuProyectComponent,  },
    { path: 'admin/project', component: ProjectComponent,  },
  ])

],



exports:[]






})

export class AdminModule {}
