import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theme, ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {

  isDarkMode$!: Observable<boolean>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() : void {
    this.isDarkMode$ = this.themeService.theme$.pipe(
      map(theme => theme === 'dark-theme')
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
