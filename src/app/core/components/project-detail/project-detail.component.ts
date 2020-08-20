import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
import {IProject} from '../../../shared/models/project';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  public project$: Observable<IProject>;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {

const idProject = this.route.snapshot.params.id;
this.project$ = this.projectService.getOneProject(idProject);

  }
/* 

  getDetails(projectId: string){

this.projectService.getOneProject(projectId).subscribe(project =>  {

  this.project$ = project;
 */



}
