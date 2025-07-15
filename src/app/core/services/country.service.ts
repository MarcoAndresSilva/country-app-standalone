import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root' // Sigue siendo la forma más común de hacer un servicio globalmente disponible
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  private infoCountries = ['name', 'cca3', 'currencies', 'capital', 'region', 'languages', 'population', 'flags', 'coatOfArms', 'continents'].join(',');

  constructor(private http: HttpClient) { }

  getAllCountries(fields?: string[]): Observable<Country[]> {
    const list = (fields && fields.length) ? fields.slice().join(',') : this.infoCountries;
    const params = new HttpParams().set('fields', list);
    return this.http.get<Country[]>(this.apiUrl, { params }).pipe(
      tap(countries => console.log(`CountryService: Received ${countries?.length} countries from service, paises com campos: [${list}]`)
      )
    );
  }
}