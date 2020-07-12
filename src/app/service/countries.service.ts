import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

const uri = 'https://restcountries-v1.p.rapidapi.com/all';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
  'x-rapidapi-key': 'c59c502afamshc44aa783f92bc14p1da879jsn972c99dfc2f4',
  'useQueryString': 'true',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getCountries(): Observable<any> {
    return this.http.get(uri, requestOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}
