import { Component, OnInit, Input } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/admin/services/image_service';

import { ProjectService } from 'src/app/shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/shared/models/project';


export interface Item { nombre: string; url: string; }


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  downloadURL = 'url';
  files: File[] = [];
  imageList: any[] = [];
  rowIndexArray: any [];
  // public project$: Observable<IProject>;
  

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  dataSource: any;

  constructor(private afs: AngularFirestore, private service: ImageService,
              private services: ImageService, private projectService: ProjectService, 
              private route: ActivatedRoute) 
              {
    this.itemsCollection = afs.collection<Item>('project');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {



/* 
    this.services.imageDetailList.snapshotChanges().subscribe(

      list => {

       this.imageList = list.map(item => {return item.payload.val(); })
       this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length + 1) / 3)).keys());
      }
    ); */
 

  }



}
