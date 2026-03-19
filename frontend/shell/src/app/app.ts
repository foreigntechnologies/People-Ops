import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('People-Ops');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt', 'en', 'es']);
    this.translate.setDefaultLang('pt');
    
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/pt|en|es/) ? browserLang : 'pt');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
