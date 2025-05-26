import { Component, input, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country, Languages } from '../../../../core/models/country.model';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnInit {
  @Input() country!: Country;

  constructor() { }

  ngOnInit(): void {
    if (!this.country) {
      console.error("CountryCardComponent: 'country' input is missing!");
    }
  }

  getLanguages(languages?: Languages): string {
    if (!languages) {
      return 'N/A';
    }
    const langValues = Object.values(languages);
    // Mostrar solo los primeros 2-3 para no saturar la card
    return langValues.slice(0, 3).join(', ') + (langValues.length > 3 ? '...' : '');
  }

}
