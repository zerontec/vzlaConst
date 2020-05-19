import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations/fadeIntRoute';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Venezuela Construction';


constructor( ){


}

// tslint:disable-next-line: use-lifecycle-interface
ngOnInit() {
  /** spinner starts on init */
  
}


}
