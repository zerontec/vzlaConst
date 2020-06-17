import { Component, OnInit } from '@angular/core';
import {IProject}   from '../../../shared/models/project';
import {ProjectService } from '../../../shared/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formu-proyect',
  templateUrl: './formu-proyect.component.html',
  styleUrls: ['./formu-proyect.component.scss']
})
export class FormuProyectComponent implements OnInit {

  private image: any;
  constructor( private protSvc: ProjectService) { }


  newProjectForm = new FormGroup({
    titleProject: new FormControl('', Validators.required),
    clienteProject : new FormControl('', Validators.required),
    descripcionProject: new FormControl('', Validators.required),
    tagsProject: new FormControl('', Validators.required),
    imageProject: new FormControl('', Validators.required),
  });
  ngOnInit() {

 
  }

  addNewProject(data: IProject) {
    console.log('New project', data);
    this.protSvc.preAddAndUpdateProject(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }


}
