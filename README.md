# Explorador Global de Países 🌍 (Angular Standalone App)

![Country App Screenshot](https://github.com/user-attachments/assets/d01dc75e-b04d-4d5a-bf28-c8bd3cea471e)

Una aplicación web interactiva y moderna construida con **Angular v17+**, que permite a los usuarios explorar, buscar y filtrar información sobre países de todo el mundo. Este proyecto, que consume la [API pública de RestCountries](https://restcountries.com/), fue desarrollado para demostrar la aplicación de la arquitectura de **componentes Standalone** y conceptos avanzados de desarrollo frontend.

### ✨ [Ver la aplicación en vivo](ENLACE_A_LA_DEMO_AQUI) ✨

---

## 🚀 Features (Funcionalidades Clave)

-   **Modo Oscuro/Claro 🌓:** Interruptor para cambiar entre temas, con la preferencia guardada en `localStorage`.
-   **Búsqueda Dinámica:** Campo de búsqueda en tiempo real que filtra países por nombre.
-   **Filtrado por Región:** Menú desplegable para filtrar los resultados por continente.
-   **Vistas Alternables:** Botones para cambiar la visualización de los países entre una cuadrícula de tarjetas y una lista detallada.
-   **Modal de Detalles:** Al hacer clic en un país, se abre un modal interactivo con información completa, incluyendo mapas, monedas y más.
-   **Diseño Responsivo:** Interfaz completamente adaptable a dispositivos móviles, tablets y de escritorio.
-   **Optimización de Carga:** Uso de Lazy Loading para componentes e imágenes, asegurando un rendimiento óptimo.

---

## 🛠️ Stack Tecnológico y Conceptos Aplicados

Este proyecto destaca por el uso de las últimas características de Angular y un enfoque en las mejores prácticas de desarrollo.

### **Frontend & UI**

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
![Angular Material](https://img.shields.io/badge/angular_material-7B1FA2?style=for-the-badge&logo=angular&logoColor=white)
![SCSS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

-   **Angular (v17+):** Framework principal, aprovechando al máximo la **arquitectura Standalone** para eliminar `NgModule`s y simplificar la estructura.
-   **TypeScript:** Uso de tipado fuerte con `interfaces` y `types` para garantizar la integridad de los datos de la API.
-   **RxJS:** Manejo de la asincronía de las peticiones HTTP con `Observables` y gestión de estado reactivo con `BehaviorSubject` para el sistema de temas.
-   **Angular Material:** Librería de componentes para construir una interfaz de usuario de alta calidad y accesible.
-   **SCSS:** Estilos modulares y escalables, con un sistema de theming basado en variables CSS para un cambio de tema eficiente.

### **Arquitectura y Conceptos Clave**

-   **Componentes Standalone:** Toda la aplicación está construida sobre la nueva API standalone, haciendo cada pieza de la UI independiente y reutilizable.
-   **Inyección de Dependencias (DI):** Uso de la función `provideHttpClient()` y servicios `providedIn: 'root'` para una gestión de dependencias moderna.
-   **Lazy Loading de Componentes:** Las rutas principales se cargan de forma perezosa (`loadComponent`) para mejorar el tiempo de carga inicial.
-   **Estrategia de Detección de Cambios `OnPush`:** Implementada en componentes presentacionales para optimizar el rendimiento y minimizar los ciclos de re-renderizado.
-   **Manejo de Ciclo de Vida y Desuscripción:** Uso del patrón `takeUntil` con `Subject` para una gestión robusta de las suscripciones, previniendo fugas de memoria.

### **Herramientas de Desarrollo**

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para ejecutar el proyecto en tu máquina.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/MarcoAndresSilva/country-app-standalone.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd country-app-standalone
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta la aplicación:**
    ```bash
    ng serve -o
    ```

La aplicación se abrirá automáticamente en `http://localhost:4200/`.

---
