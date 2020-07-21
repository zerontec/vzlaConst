import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormuProyectComponent } from './components/project/formu-proyect/formu-proyect.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';


import { ListProjectComponent } from './components/project/list-project/list-project.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';
import { DetailProjectComponent } from './components/project/detail-project/detail-project.component';
import { NgDropFilesDirective } from './ng-droop-file.directive';
import { ImageproyComponent } from './components/project/imageproy/imageproy.component';
import { CargaImagenesService } from './services/cargar-imagenes.service';

import { DropzoneDirective } from '././services/dropzone.directive';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UploadTaskComponent } from './components/project/upload-task/upload-task.component';
import { UploaderComponent } from './components/project/uploader/uploader.component';
import { ImagesComponent } from './components/project/images/images.component';

import { ImageListComponent } from './components/project/images/image-list/image-list.component';
import { ImageComponent } from './components/project/images/image/image.component';

@NgModule({


declarations:[
FormuProyectComponent,
AdminProjectsComponent,
DropzoneDirective,


ListProjectComponent,
ProjectComponent,
EditProjectComponent,
DetailProjectComponent,
NgDropFilesDirective,
ImageproyComponent,
UploadTaskComponent,
UploaderComponent,
ImagesComponent,
ImageComponent,
ImageListComponent,




 ],

imports: [
FormsModule,
ReactiveFormsModule,
SharedModule,
CommonModule,
AngularFirestoreModule,
AngularFireStorageModule,
ReactiveFormsModule,
AngularFireModule,
AngularFireDatabaseModule,
RouterModule.forChild([
    { path:  'escritorio', component: ProjectComponent, children :[
    { path: 'new/project', component:FormuProyectComponent,  },
    { path: 'project/:id', component: FormuProyectComponent,  },
    { path: 'new/image', component: ImageproyComponent,  },
    { path: 'new/images', component: UploaderComponent,  },
    { path: 'new/imagenes', component: ImageComponent,  },
    
]
  }

  ])

],



exports:[],
providers: [CargaImagenesService],






})

export class AdminModule {}
