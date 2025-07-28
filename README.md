# Explorador Global de Países 🌍 (Angular Standalone App)

Una aplicación web interactiva y moderna construida con **Angular** y **TypeScript**, que permite a los usuarios explorar, buscar y filtrar información sobre países de todo el mundo. Este proyecto consume la [API pública de RestCountries](https://restcountries.com/).

### ✨ [Ver la aplicación en vivo]([ENLACE_A_VERCEL_O_NETLIFY]) ✨

<img width="1122" height="363" alt="image" src="https://github.com/user-attachments/assets/8e83ac34-37a7-45f1-a44c-8c5d1bed806a" />

<img width="1102" height="555" alt="image" src="https://github.com/user-attachments/assets/d01dc75e-b04d-4d5a-bf28-c8bd3cea471e" />


---

## Funcionalidades Implementadas

*   **Dark Mode 🌓:** Interruptor para cambiar entre tema claro y oscuro. La preferencia se guarda en el `localStorage` del navegador.
*   **Búsqueda Dinámica:** Búsqueda en tiempo real por nombre de país (común u oficial).
*   **Filtrado por Región:** Menú desplegable para filtrar los países por su continente/región.
*   **Vista de Cuadrícula / Lista 📊:** Interruptor para alternar entre una vista de cards en cuadrícula (`grid`) o una vista de lista detallada.
*   **Modal Interactivo:** Al hacer clic en un país, se muestra un modal con información completa, incluyendo escudo, monedas, mapas y más.
*   **Diseño Responsivo:** Interfaz completamente adaptable a dispositivos móviles, tablets y de escritorio.
*   **Lazy Loading de Componentes e Imágenes:** Carga eficiente de la aplicación y de los recursos visuales.
*   **Accesibilidad (a11y):** Consideraciones básicas para la navegación con teclado e interacción.

---

## Stack Tecnológico y Conceptos Clave

Este proyecto fue desarrollado para demostrar la aplicación de conceptos modernos de Angular y buenas prácticas de desarrollo frontend.

*   **Framework:** Angular (v17+ o la que estés usando)
*   **Arquitectura:**
    *   **Componentes Standalone:** La aplicación está estructurada con componentes, directivas y pipes standalone, simplificando la gestión de dependencias y eliminando la necesidad de `NgModule`s.
    *   **Arquitectura Basada en Componentes:** Clara separación de responsabilidades entre componentes (`HeaderComponent`, `CountryListComponent`, `CountryCardComponent`, `CountryModalComponent`).
    *   **Servicios e Inyección de Dependencias (DI):** Uso de servicios singleton (`providedIn: 'root'`) para la lógica de negocio (obtención de datos, gestión del tema).
*   **Manejo de Estado y Datos:**
    *   **RxJS:** Uso de `Observables` para manejar peticiones HTTP asíncronas y `Subjects` (`BehaviorSubject`, `Subject`) para la gestión del estado reactivo (tema) y la desuscripción (`takeUntil`) para prevenir memory leaks.
    *   **`HttpClient`:** Proveído de forma moderna con `provideHttpClient()` para el consumo de la API REST externa.
*   **UI y Estilos:**
    *   **Angular Material:** Utilización de componentes de alta calidad como `MatFormField`, `MatInput`, `MatSelect`, `MatButtonToggleGroup`, `MatIcon`, etc.
    *   **SCSS:** Estilos modulares y mantenibles con variables, anidamiento y selectores avanzados como `:host-context`.
    *   **Variables CSS para Theming:** Implementación de un sistema de tema claro/oscuro eficiente y escalable.
*   **Rendimiento y Optimización:**
    *   **Lazy Loading:** Carga diferida de componentes principales a través del Router (`loadComponent`).
    *   **Change Detection `OnPush`:** Estrategia de detección de cambios `OnPush` en componentes "presentacionales" para minimizar re-renderizados innecesarios.
    *   **`trackBy` en `*ngFor`:** Optimización del renderizado de listas grandes.
*   **TypeScript:**
    *   **Tipado Fuerte:** Uso de `interfaces` y `types` para definir modelos de datos robustos y seguros.
*   **Animaciones:**
    *   **`@angular/animations`:** Para transiciones suaves de entrada y salida en componentes dinámicos como el modal.

---

## Instalación y Ejecución Local 🛠️

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/MarcoAndresSilva/country-app-standalone.git
    ```
2.  **Navegar al directorio del proyecto:**
    ```bash
    cd country-app-standalone
    ```
3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```
4.  **Ejecutar la aplicación en modo de desarrollo:**
    ```bash
    ng serve -o
    ```
    La aplicación estará disponible en `http://localhost:4200/`.

---
