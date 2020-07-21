import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({

providedIn: 'root'

})

export class ImageService{


imageDetailList: AngularFireList< any []> = null ;

    constructor(private firebase: AngularFireDatabase){}


    getIamgeDetailList(){

        this.imageDetailList = this.firebase.list('imageDetails');


    }

insertImageDetail(imageDetails){

    this.imageDetailList.push(imageDetails);


}

}