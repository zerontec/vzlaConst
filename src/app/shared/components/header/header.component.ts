import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// { TranslateService } from '../../services/translate.service';
import { TranslocoService } from '@ngneat/transloco';
// import {IAppUser} from '../../models/user.interface';
import {User} from '../../models/user.interface';
import { Observable } from 'rxjs';
import {AuthService} from '../../../auth/service/auth.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RoleValidator } from 'src/app/auth/helpers/roleValidator';


declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  appUser: User = {} as User;

  title = 'angular-i18n-transloco';
  selectLang = 'en';
  hoy: any = new Date();
  router: any;
  CurrentUser: any;
  role: boolean;

  constructor(private translocoService: TranslocoService,
              private  authS: AuthService, private routers: Router) {
    this.selectLanguage();


  
  }

  ngOnInit() {
    init_plugins();
    this.authS.user$.subscribe(user => this.appUser = user);
  }
  async onLogout() {
    try {
      await this.authS.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }



  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
  }
  }




