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
/* // AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
} */
 

@NgModule({
  declarations: [FooterComponent,
    HeaderComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SUB_RUTAS,
    APP_ROUTES,


    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],

  exports: [

    HeaderComponent,
    FooterComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}