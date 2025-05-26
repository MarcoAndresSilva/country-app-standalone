import { Routes } from '@angular/router';
import { CountryListComponent } from './features/countries/country-list/country-list.component';

export const routes: Routes = [
    {
        path: 'countries',
        // Cargar un componente standalone directamente usando lazy loading
        loadComponent: () =>
          import('./features/countries/country-list/country-list.component')
            .then(m => m.CountryListComponent) // Asegúrate que el nombre del componente exportado sea CountryListComponent
      },
      {
        path: '', // Ruta raíz
        redirectTo: '/countries', // Redirige a /countries
        pathMatch: 'full' // 'full' significa que solo redirige si la ruta es exactamente vacía
      },
      {
        path: '**', // Wildcard para cualquier ruta no encontrada
        redirectTo: '/countries' // O podrías crear un componente NotFound y redirigir allí
      }
];
