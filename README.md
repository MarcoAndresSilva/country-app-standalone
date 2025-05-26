# Explorador Global de Países 🌍

Una aplicación web interactiva desarrollada con Angular y TypeScript que permite a los usuarios explorar información detallada sobre países de todo el mundo. La aplicación consume la API de RestCountries para ofrecer una experiencia rica y actualizada

## Funcionalidades Implementadas ✨

- Visualización Dinámica de Países: Se presenta una lista completa de países, cada uno mostrado en una tarjeta (<app-country-card>) con        información esencial:
    Nombre común del país.
    Bandera (imagen SVG).
    Capital(es).
    Población (formateada).
    Lenguajes principales.
  
- Modal Interactivo con Detalles del País: Al hacer clic en cualquier tarjeta de país, se despliega un modal (<app-country-modal>) que         muestra información más completa:
    Nombre oficial y nombres nativos.
    Escudo de armas (si está disponible).
    Monedas, continentes, zonas horarias, prefijo telefónico.
    Enlaces directos a Google Maps y OpenStreetMaps.
    Cierre del modal mediante botón, tecla Escape o clic en el overlay.
  
- (Próximamente) Búsqueda de Países: Funcionalidad para buscar países por su nombre.
  
- (Próximamente) Filtrado por Región: Capacidad de filtrar la lista de países según la región seleccionada.
  
- Diseño Responsivo: La interfaz se adapta a diferentes tamaños de pantalla, ofreciendo una buena experiencia de usuario en dispositivos  móviles y de escritorio.
  
- Animaciones Suaves: El modal utiliza animaciones de Angular (@angular/animations) para una experiencia de apertura y cierre más fluida.

## Enlace de la aplicación desplegada 🌐

Puedes probar la aplicación en el siguiente enlace:  
[**Ver aplicación en vivo**](https://country-app-standalone.netlify.app)

## Stack Tecnológico y Conceptos Aplicados 🚀

Angular 19:
- Componentes Standalone: La aplicación está estructurada con componentes, directivas y pipes standalone, reduciendo la necesidad de   NgModule y simplificando la gestión de dependencias.
- Arquitectura Basada en Componentes: Clara separación de responsabilidades entre componentes (ej. CountryListComponent, CountryCardComponent, CountryModalComponent).
- Servicios e Inyección de Dependencias: El CountryService encapsula la lógica de obtención de datos de la API y es inyectado donde se necesita.
- Enrutamiento (Angular Router): Configuración de rutas para cargar componentes, con implementación de Lazy Loading a nivel de componente (loadComponent) para optimizar la carga inicial.
- Data Binding: Uso de interpolación, property binding ([]), event binding (()).
- Directivas Estructurales: *ngIf para renderizado condicional y *ngFor para iterar sobre listas, optimizado con trackBy.
- RxJS: Utilización de Observables para manejar las respuestas asíncronas del HttpClient y gestión de suscripciones para prevenir memory leaks (con takeUntil y async pipe donde aplique).
- HttpClientModule (proveído mediante provideHttpClient): Para realizar peticiones HTTP a la API externa.
- Optimización de Change Detection: Uso de ChangeDetectionStrategy.OnPush en componentes que dependen solo de sus inputs para mejorar el rendimiento.
- @angular/animations: Para transiciones suaves en la interfaz de usuario.
TypeScript:
- Tipado Fuerte: Definición de interfaces (ej. Country, Name, Flags) para los modelos de datos, asegurando la integridad y facilitando el desarrollo.
 -Uso de características modernas de TypeScript para un código más robusto y mantenible.
- SCSS: Para estilos más organizados y potentes, aprovechando variables, anidamiento y mixins.
- HTML5 Semántico y Accesibilidad (a11y): Consideraciones básicas para una correcta estructura y navegabilidad (ej. roles, tabindex).
- API de RestCountries: Fuente de datos externa para la información de los países.
- Git y GitHub: Para el control de versiones y la gestión del código fuente

  ## Ejecutar el programa localmente 🛠️
  git clone https://github.com/MarcoAndresSilva/country-app-standalone.git
  cd country-app-standalone
  npm install
  ng serve

  
