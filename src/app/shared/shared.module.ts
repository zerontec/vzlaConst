import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { APP_ROUTES } from '../app.routes';
import { RouterModule } from '@angular/router';
import { SUB_RUTAS } from '../sub.rutas';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslatePipe } from './pipes/translate.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopOverComponent } from './animations/pop-over/pop-over.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { FormsModule } from '@angular/forms';
import { WhatReceiveComponent } from './components/what-receive/what-receive.component';


@NgModule({
  declarations: [FooterComponent,
    HeaderComponent,
    TranslatePipe,
    PopOverComponent,
    WhatReceiveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    TranslocoRootModule,
    FormsModule,
    SUB_RUTAS,
    APP_ROUTES,


    HttpClientModule,

  ],
  providers:[],

  exports: [

    HeaderComponent,
    FooterComponent,
    TranslatePipe,
    WhatReceiveComponent
  ]
})
export class SharedModule { }

