import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject} from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

import { Country, Languages } from '../../../core/models/country.model';
import { CountryService } from '../../../core/services/country.service';
import { CountryCardComponent } from '../components/country-card/country-card.component';
import { CountryModalComponent } from '../components/country-modal/country-modal.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; // Para la Parte 3
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    CommonModule,
    CountryCardComponent,
    CountryModalComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})

export class CountryListComponent implements OnInit, OnDestroy {

  allCountries: Country[] = []; // Para almacenar todos los paises que llegaron en la respuesta de la API
  countriesToDisplay: Country[] = []; // Para almacenar los paises que se muestran en la interfaz
  countries: Country[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  searchTerm: string = ''; // Para almacenar el texto de búsqueda
  selectedRegion: string = ''; // para el valor del mat-select
  region: string[] = []; // para las opciones del <mat-select>

  selectedCountry: Country | null = null; 

  private destroy$ = new Subject<void>();

  constructor(private countryService: CountryService) {
  console.log('CountryListComponent constructor');
  }
    ngOnInit(): void{
      console.log('CountryListComponent: ngOnInit');
      this.loadCountries();
    }

    loadCountries(): void{
      this.isLoading = true;
      this.error = null;
      this.countryService.getAllCountries()
      .pipe(
        takeUntil(this.destroy$), 
        tap(data => console.log(`CountryListComponent: Received ${data?.length} countries from service`))
        )
        .subscribe({
          next: (data) => {
            this.allCountries = data;
            this.countriesToDisplay = data;
            this.region = [...new Set(data.map(country => country.region).filter(Boolean))].sort();// generar la lista de regiones unicas a partir de los paises y ordenarlas alfabeticamente
            this.isLoading = false;
          },
          error: (error) => {
            this.error = error.message;
            console.error('CountryListComponent: Error loading countries', error);
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          },
        });
    }

  getLanguages(languages?: Languages): string {
    if (!languages) {
      return 'N/A';
    }
    return Object.values(languages).join(', ');
  }

  trackByCca3(index: number, country: Country): string {
    return country.cca3;
  }

  onSearch(): void {
    if(!this.searchTerm.trim()) {
      this.countriesToDisplay = this.allCountries;
      return;
    }

    const lowerCaseSearchTerm = this.searchTerm.toLowerCase().trim();
    this.countriesToDisplay = this.allCountries.filter(country => 
      country.name.common.toLowerCase().includes(lowerCaseSearchTerm) || country.name.official.toLowerCase().includes(lowerCaseSearchTerm));
  }

  openCountryModal(country: Country): void {
  console.log(`CountryListComponent: Opened modal for country ${country.name.common}`);
  this.selectedCountry = country;
  console.log('selectedCountry ahora es:', this.selectedCountry);
}

closeCountryModal(): void {
  this.selectedCountry = null;
}


  ngOnDestroy(): void {
    console.log('CountryListComponent ngOnDestroy');
    this.destroy$.next(); // Emite un valor para que takeUntil complete las suscripciones
    this.destroy$.complete(); // Cierra el Subject
    console.log('CountryListComponent destroyed and subscriptions cleaned up.');
  }
}
