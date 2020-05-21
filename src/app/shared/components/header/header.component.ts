import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// { TranslateService } from '../../services/translate.service';
import { TranslocoService } from '@ngneat/transloco';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'angular-i18n-transloco';
  selectLang = 'en';
  hoy: any = new Date();

  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }

  ngOnInit() {
    init_plugins();
  }
  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
  }
  }




