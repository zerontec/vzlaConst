import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';
import { ImageService } from '../../../admin/services/image_service';



export interface Item { nombre: string; url: string; }

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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
  }

}
