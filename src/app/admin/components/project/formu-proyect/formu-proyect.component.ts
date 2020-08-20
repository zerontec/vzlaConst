import { Component, OnInit } from '@angular/core';
import {IProject} from '../../../../shared/models/project';
import {ProjectService } from '../../../../shared/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileI } from 'src/app/shared/models/file.interfaces';


@Component({
  selector: 'app-formu-proyect',
  templateUrl: './formu-proyect.component.html',
  styleUrls: ['./formu-proyect.component.scss']
})
export class FormuProyectComponent implements OnInit {

  private image: any;
  estaSobreElemento = false;
  

  public  addNewProjectForm = new FormGroup({
    titleProject: new FormControl('', [Validators.required, Validators.minLength(6)]),
    clienteProject : new FormControl('', Validators.required),
    descripcionProject: new FormControl('', Validators.required),
     imageProject: new FormControl('', Validators.required),
  });



  constructor( private protSvc: ProjectService) { }


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
