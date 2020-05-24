
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {VgCoreModule} from 'videogular2/compiled/core';
import {VgControlsModule} from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';



import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { APP_ROUTES } from './app.routes';
import { SUB_RUTAS } from './sub.rutas';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SharedModule,
    CoreModule,
   
     APP_ROUTES,
    SUB_RUTAS,
    NgxSpinnerModule,
    HttpClientModule,
   
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
