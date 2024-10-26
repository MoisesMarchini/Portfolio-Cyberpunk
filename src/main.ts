import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

if (environment.production)
  enableProdMode();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
