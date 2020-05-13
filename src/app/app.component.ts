import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations/fadeIntRoute';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'mdb-angular-free';


constructor( private spinner: NgxSpinnerService){


}

// tslint:disable-next-line: use-lifecycle-interface
ngOnInit() {
  /** spinner starts on init */
  this.spinner.show();
}


}
