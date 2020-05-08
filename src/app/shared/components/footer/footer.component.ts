import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title = 'angular-i18n-transloco';
  selectLang = 'en';

  constructor(private translocoService: TranslocoService) {


    this.selectLanguage();
  }

  ngOnInit() {
  }

  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
  }

}
