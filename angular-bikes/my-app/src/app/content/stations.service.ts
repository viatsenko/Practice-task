import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

export interface Stations {
  network:
    {
      company: Array<string>;
      location: {
        city: string,
      },
      name: string,
      id?: string,
      stations: Array<{
        free_bikes: number,
        name: string,
        id: string,
      }>
    }

}
@Injectable({providedIn: 'root'})
export class StationsService{
  constructor(private http: HttpClient) {}

  fetchStation(id: string): Observable<Stations>{
    return this.http.get<Stations>(`http://api.citybik.es/v2/networks/${id}`)
      .pipe(
        map(response => {
          return response
        }),
        catchError(error => {
          return throwError(error)
        })
      )
  }

}
