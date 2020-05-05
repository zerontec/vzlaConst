import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../shared/services/translate.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private translate: TranslateService) { }

  ngOnInit() {
  }

  setLang(lang: string) {
    // console.log("Language", lang);
    this.translate.use(lang).then(() => {});
  }

}
