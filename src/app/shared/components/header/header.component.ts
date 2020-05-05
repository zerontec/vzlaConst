import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

   }

  ngOnInit() {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

/* 
setLang(lang: string) {
    // console.log("Language", lang);
    this.translate.use(lang).then(() => {});
  } */

}
