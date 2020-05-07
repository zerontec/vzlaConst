import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../shared/services/translate.service';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-i18n-transloco';
  selectLang = 'en';

  constructor( private translocoService: TranslocoService) { 
  
    this.selectLanguage();
  }

   
  
  
  ngOnInit() {
  }

  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
  }

}
