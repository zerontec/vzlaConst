import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/admin/services/image_service';


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

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore, private service: ImageService,
              private services: ImageService) {
    this.itemsCollection = afs.collection<Item>('files');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {

    this.services.imageDetailList.snapshotChanges().subscribe(

      list => {

       this.imageList = list.map(item => {return item.payload.val(); })
       this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length + 1) / 3)).keys());
      }
    );
 

  }

 

}
