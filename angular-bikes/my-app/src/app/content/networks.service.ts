import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

export interface Networks {
  networks: [
    {
      company: Array<string>;
      location: {
        city: string,
      },
      name: string,
      id: string,
    }
  ]
}

@Injectable({providedIn: 'root'})
export class NetworksService {
  constructor(private http: HttpClient, ) {}

  fetchNetworks(): Observable<Networks>{
    return this.http.get<Networks>('http://api.citybik.es/v2/networks')
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
