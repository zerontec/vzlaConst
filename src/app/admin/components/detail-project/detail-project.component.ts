import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService} from '../../../shared/services/project.service';
import { Observable } from 'rxjs';
import { IProject } from '../../../shared/models/project';


@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {
  public project$: Observable<IProject>;
  constructor(private route: ActivatedRoute, private projectSvc: ProjectService) { }

  ngOnInit() {

    const idProject = this.route.snapshot.params.id;
    this.project$ = this.projectSvc.getOneProject(idProject);
  }
  }

