import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme'; 

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  private renderer: Renderer2;
  private _theme = new BehaviorSubject<Theme>(this.getInitialTheme());
  $theme = this._theme.asObservable();

  constructor( rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private getInitialTheme(): Theme {

    const storeTheme = localStorage.getItem('app-theme') as Theme;   // si hay un tema en el almacenamiento local
    if(storeTheme) {
      return storeTheme;
    }
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {    // si no hay un tema en el almacenamiento local, se utiliza el tema predeterminado
      return 'dark-theme';
    }
    return 'light-theme'; // Por defecto
  }

  initializeTheme(): void { // inicializar el tema al abrir la app
    this.setTheme(this._theme.value);
  }

  toggleTheme(): void {
    const newTheme = this._theme.value === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.setTheme(newTheme);
  }

  private setTheme(theme: Theme ): void {
    localStorage.setItem('app-theme', theme);// guardar el tema en el localStorage

    const previusTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';// obtener el tema anterior 
    this.renderer.removeClass(document.body, previusTheme);
    this.renderer.addClass(document.body, theme);

    this._theme.next(theme); // emitir el nuevo tema "valor" a los suscriptores
    console.log(`tema cambiado ${theme}`);
  }


}




