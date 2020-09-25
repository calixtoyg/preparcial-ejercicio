import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Country} from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://restcountries.eu/rest/v2/region/';
  }

  getByRegion(region: string): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.url + region, {responseType: 'json'});
  }
}
