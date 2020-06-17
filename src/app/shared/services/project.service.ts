 import { Injectable } from '@angular/core';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { Observable } from 'rxjs';
 import { map, finalize } from 'rxjs/operators';
 import {FileI} from '../../shared/models/file.interfaces';
 import {IProject } from '../models/project';
 import { AngularFireStorage } from '@angular/fire/storage';




 @Injectable({
  providedIn: 'root'

})
export class ProjectService {
  private projectCollection: AngularFirestoreCollection<IProject>;
  private filePath: any;
  private downloadURL: Observable<string>;




  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {

    this.projectCollection = afs.collection<IProject>('project');



   }

   public getAllproject(): Observable<IProject[]> {
    return this.projectCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as IProject;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
  public getOneProject(id: IProject): Observable<IProject> {
    return this.afs.doc<IProject>(`project/${id}`).valueChanges();
  }

  public deleteProjectById(project: IProject) {
    return this.projectCollection.doc(project.id).delete();
  }

  public editProjectById(project: IProject, newImage?: FileI) {
    if (newImage) {
      this.uploadImage(project, newImage);
    } else {
      return this.projectCollection.doc(project.id).update(project);
    }
  }

  public preAddAndUpdateProject(project: IProject, image: FileI): void {
    this.uploadImage(project, image);
  }

  private saveProject(project: IProject) {
    const projectObj = {
      titleProject: project.titleProject,
      clienteProject:project.clienteProject,
      descripcionProject: project.descripcionProject,
      imageProject: this.downloadURL,
      fileRef: this.filePath,
      tagsProject: project.tagsProject,
    };

    if (project.id) {
      return this.projectCollection.doc(project.id).update(projectObj);
    } else {
      return this.projectCollection.add(projectObj);
    }

  }

  private uploadImage(project: IProject, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.saveProject(project);
          });
        })
      ).subscribe();
  }


}




 