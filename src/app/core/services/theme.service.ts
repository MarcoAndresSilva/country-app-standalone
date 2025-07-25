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

  getInitialTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
  }

}

