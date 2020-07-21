import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {IProject} from '../../../../shared/models/project';
import { ProjectService } from 'src/app/shared/services/project.service';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  private image: any;
  private imageOriginal: any;
@Input() project: IProject;

  constructor(private projectServ: ProjectService) { }

  editProjectForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titleProject: new FormControl('', Validators.required),
    clienteProject : new FormControl('', Validators.required),
    descripcionProject: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imageProject: new FormControl('', Validators.required),
  });


  ngOnInit() {


    this.image = this.project.imageProjetc;
    this.imageOriginal = this.project.imageProjetc;
    this.initValuesForm();

  }
editProject( project: IProject) {

if(this.image === this.imageOriginal) {

  project.imageProjetc = this.imageOriginal;
  this.projectServ.editProjectById(project);

} else {

  this.projectServ.editProjectById(project, this.image);
}


}
handleImage(event: any): void {
  this.image = event.target.files[0];
}

private initValuesForm(): void {
  this.editProjectForm.patchValue({
    id: this.project.id,
    titleProject: this.project.titleProject,
    descriptionProject: this.project.descripcionProject,
  });
}

}
