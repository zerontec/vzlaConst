import { Component, OnInit } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-i18n-transloco';
  selectLang = 'en';

  constructor( ) { 
  
   
  }


  ngOnInit() {
  }

 
  

}
