import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NetworksService} from "../../content/networks.service";
import {
  loadNetworks,
  loadNetworksError,
  loadNetworksSuccess, loadStations,
  loadStationsError,
  loadStationsSuccess, selectNetworks
} from "../actions/bikes.actions";
import {catchError, map, mergeMap, of, retry, switchMap} from "rxjs";
import {StationsService} from "../../content/stations.service";


@Injectable()
export class BikesEffects {
  constructor(private actions$: Actions, public networksService: NetworksService, public stationsService: StationsService) {
  }

  loadBikesNetworks$ = createEffect(() => this.actions$.pipe(
      ofType(loadNetworks),
      mergeMap(() => this.networksService.fetchNetworks().pipe(
        map(response =>
           loadNetworksSuccess({payload: response.networks})),
        catchError((error) => of(loadNetworksError({payload: error})))
      ))
    )
  );

  loadBikesStations$ = createEffect(() => this.actions$.pipe(
    ofType(loadStations),
    mergeMap((value) => this.stationsService.fetchStation(value.id).pipe(
      switchMap(response =>
         [
          loadStationsSuccess({payload: response.network.stations}),
          selectNetworks({
            id: response.network.id,
            name: response.network.name
          })
        ]
      ),
      catchError((error) => of(loadStationsError({payload: error})))
    ))
  ))

}
