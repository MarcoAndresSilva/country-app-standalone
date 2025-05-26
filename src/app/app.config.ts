import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // 1. Importa provideHttpClient
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
    // 2. Añade provideHttpClient aquí
    // withInterceptorsFromDi() se usa para asegurar la compatibilidad si más adelante
    // decides usar interceptores HTTP que se basan en Inyección de Dependencias (DI).
    // Si no planeas usar interceptores o usarás los nuevos interceptores funcionales,
    // podrías omitir withInterceptorsFromDi() y solo poner provideHttpClient().
    // Pero es una buena práctica incluirlo por ahora.
    ]
};
