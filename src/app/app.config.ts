import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(CommonModule, ReactiveFormsModule, FormsModule),
  ],
}).catch((err) => console.error(err));

export const appConfig = {
  apiUrl: 'https://api.example.com', // Ajusta según tu configuración
  appTitle: 'Mi Aplicación',
};
