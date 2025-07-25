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
    // si hay un tema en el almacenamiento local
    const storeTheme = localStorage.getItem('app-theme') as Theme;
    if(storeTheme) {
      return storeTheme;
    }
    // si no hay un tema en el almacenamiento local, se utiliza el tema predeterminado
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark-theme';
    }
    return 'light-theme'; // Por defecto
  }
}




