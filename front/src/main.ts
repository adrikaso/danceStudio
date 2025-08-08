import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

import { Home } from './app/pages/home/home';
import { Classes } from './app/pages/classes/classes';
import { Courses } from './app/pages/courses/courses';
import { Teachers } from './app/pages/teachers/teachers';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ esta línea habilita el HttpClient
  ]
});