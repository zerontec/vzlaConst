import { Component, OnInit } from '@angular/core';
import {

trigger,
state,
style,
animate,
transition

} from '@angular/animations';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent implements OnInit {

  show = false;

  constructor() { }
 get stateName(){
   return this.show? 'show' : 'hide'
 }

toggle(){

  this.show = !this.show;
}

//el codigo en html 

/* <div [@popOverState]="stateName">
<p><img src="assets/images/AngularFireModule.png" width="50px"></p>
<p>Hola</p>
</div>

<button (click)= "toggle()"> Toggle popOve</button> */







  ngOnInit() {
  }

}
