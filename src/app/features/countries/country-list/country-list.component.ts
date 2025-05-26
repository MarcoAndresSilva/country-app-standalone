import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject} from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Country, Languages } from '../../../core/models/country.model';
import { CountryService } from '../../../core/services/country.service';
import { CountryCardComponent } from '../components/country-card/country-card.component';
import { CountryModalComponent } from '../components/country-modal/country-modal.component';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, CountryCardComponent, CountryModalComponent ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})

export class CountryListComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  isLoading: boolean = true;
  error: string | null = null;

   _selectedCountry: Country | null = null; // Cambiamos el nombre para usar getter/setter
  get selectedCountry(): Country | null {
    return this._selectedCountry;
  }
  set selectedCountry(value: Country | null) {
    console.log('----- selectedCountry CAMBIANDO -----');
    console.log('Valor anterior:', this._selectedCountry?.name?.common || this._selectedCountry);
    console.log('Nuevo valor:', value?.name?.common || value);
    try { throw new Error("Stack trace para selectedCountry"); } catch (e: any) { console.warn(e.stack); } // Para ver quién lo llama
    this._selectedCountry = value;
  }

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
            this.countries = data;
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
     // Helper para mostrar lenguajes (lo usaremos en la card luego, pero es útil tenerlo)
  getLanguages(languages?: Languages): string {
    if (!languages) {
      return 'N/A';
    }
    return Object.values(languages).join(', ');
  }

  trackByCca3(index: number, country: Country): string {
    return country.cca3;
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
