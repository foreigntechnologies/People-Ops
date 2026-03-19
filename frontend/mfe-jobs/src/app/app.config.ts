import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { routes } from './app.routes';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string): Observable<any> {
    const origin = window.location.port === '4202' ? '' : 'http://localhost:4202';
    return this.http.get(`${origin}/assets/i18n/${lang}.json`);
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'pt',
        loader: {
          provide: TranslateLoader,
          useClass: CustomLoader,
          deps: [HttpClient]
        }
      })
    ),
    TranslateService,
    TranslateStore
  ]
};
