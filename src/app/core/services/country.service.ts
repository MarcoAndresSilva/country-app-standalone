import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root' // Sigue siendo la forma más común de hacer un servicio globalmente disponible
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    console.log('Fetching all countries from API (Standalone App)...');
    return this.http.get<Country[]>(this.apiUrl).pipe(
      tap(countries => {
        if (countries && countries.length > 0) {
          console.log(`Fetched ${countries.length} countries. First country:`, countries[0]);
        } else {
          console.log('Fetched 0 countries or API response is not an array.');
        }
      })
    );
  }
}